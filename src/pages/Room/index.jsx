import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  const mymeeting = async (element) => {
    const appId = 1322149039;
    const serverSecret = '60dfc7460a7e85c3ca4f940b31396712';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      'wasif'
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url: `http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  useEffect(() => {
    if (meetingRef.current) {
      mymeeting(meetingRef.current);
    }
  }, [roomId]);

  return (
    <div>
      <div ref={meetingRef} style={{ width: '100%', height: '600px' }} />
    </div>
  );
};

export default RoomPage;
