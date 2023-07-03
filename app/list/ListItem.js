"use client";

import Link from "next/link";
import { storage } from "/firebase";
import { ref, deleteObject } from "firebase/storage";
import Image from "next/image";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

export default function ListItem({ result }) {
const [r, setR] = useState(null)
  useEffect(() => {
    fetch("/api/post/all", {
      method: "POST",
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("데이터 가져옴 .", response);
          return response.json();
        } else {
          console.log(response);
          throw new Error("데이터 못 가져옴");
        }
      })
      .then((r) => {
        console.log(r, "r");
        setR(r)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const DataDelete = async (e, i) => {
    const confirmDelete = window.confirm("게시글을 삭제하시겠습니까?");
    if (confirmDelete) {
      if (result.urls && result.imageRefs) {
        const deleteImage = async () => {
          for (let i = 0; i < result.imageRefs.length; i++) {
            const imageRef = ref(storage, result.imageRefs[i]._location.path_);

            await deleteObject(imageRef)
              .then(() => {
                console.log("이미지 삭제 완료");
              })
              .catch((error) => {
                console.error("이미지 삭제 에러:", error);
              });
          }
        };

        await deleteImage();

      }

      fetch("/api/post/delete", {
        method: "POST",
        body: result[i]._id.toString(),
      })
        .then(async (response) => {
          return response.json();
        })
        .then((response) => {
          if (response === "삭제 안됨") {
            return;
          } else {
            e.target.parentElement.parentElement.parentElement.style.opacity = 0;
            setTimeout(() => {
              e.target.parentElement.parentElement.parentElement.style.display =
                "none";
            }, 1000);
          }
        });
    }
  };

  return <>{r && <Card result={result} list="list" />}</>
}

//
