"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const YouTubeP = ({ 유튜브링크 }) => {
  const [renderPlayer, setRenderPlayer] = useState(false);

  useEffect(() => {
    setRenderPlayer(true);
  }, []);

  const [playerWidth, setPlayerWidth] = useState('885px');
  const [playerHeight, setPlayerHeight] = useState('498px');

  useEffect(() => {
    const handleResize = () => {
      // 화면 크기에 따라 플레이어 크기 조정
      if (window.innerWidth <= 550) {
        setPlayerWidth('100%');
        setPlayerHeight('300px');
      } else {
        setPlayerWidth('885px');
        setPlayerHeight('498px');
      }
    };

    // 페이지 로드 및 창 크기 변경 시 이벤트 리스너 등록
    handleResize();
    window.addEventListener('resize', handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {renderPlayer && (
        <div className="m-auto">
          <ReactPlayer
            className="m-auto"
            url={`'${유튜브링크}'`} // 플레이어 url
            // width="800px" // 플레이어 크기 (가로)
            // height="500px" // 플레이어 크기 (세로)
            width={playerWidth}
            height={playerHeight}
            playing={false} // 자동 재생 on
            // muted={true} // 자동 재생 on
            controls={true} // 플레이어 컨트롤 노출 여부
            // light={false} // 플레이어 모드
            //   pip={true} // pip 모드 설정 여부
            //   onEnded={() => handleVideo()} // 플레이어 끝났을 때 이벤트
          />
        </div>
      )}
    </>
  );
};

export default YouTubeP;
