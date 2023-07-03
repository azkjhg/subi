"use client";
import React, { useEffect, useState } from "react";
import { storage } from "/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

const Page = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const uploadAndSubmitForm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (imageUpload == null) {
      alert("이미지를 업로드해주세요.");
      return;
    }

    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);

    uploadBytes(imageRef, imageUpload)
      .then(async () => {
        alert("이미지 업로드 완료!");
        let url = await getDownloadURL(imageRef)
          .then((url) => {
            console.log("업로드된 이미지 URL:", url);
            return url;
          })
          .catch((error) => {
            console.error("이미지 URL 가져오기 에러:", error);
          });

        // 이곳에서 이미지 업로드가 완료되었으므로 폼을 제출합니다.
        const formData = {
          title: title,
          content: content,
          url: url,
          imageRef: imageRef,
        };

        fetch("/api/post/new", {
          method: "POST",
          body: JSON.stringify(formData),
        })
          .then((response) => {
            return response.json();
          })
          .then((response) => {
            if (response === "업로드 완료") {
              alert("폼 제출 완료!");
              router.push("/list");
            } else {
              throw new Error("폼 제출 실패");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error("이미지 업로드 에러:", error);
      });
  };


  return (
    <div>
      <form onSubmit={uploadAndSubmitForm}>
        <input
          name="title"
          placeholder="제목"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          name="content"
          placeholder="내용"
          value={content}
          onChange={handleContentChange}
        />

        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button type="submit">업로드 및 제출</button>
      </form>
    </div>
  );
};

export default Page;
