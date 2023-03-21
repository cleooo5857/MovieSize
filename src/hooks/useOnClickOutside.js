import { useEffect } from "react"

const useOnClickOutside = (ref,handler) => {
   useEffect(() => {
      // 
      const listener = (event) => {
         if(!ref.current || ref.current.contains(event.target)){
            return; 
         }
         // 모달 창 외부 클릭 시 닫기
         handler()
      }; 
      
      // 중복코드를 방지하기 위한 이벤트
      // 버튼 클릭 시 listener등록 한 함수 실행
      document.addEventListener("mousedown",listener)
      document.addEventListener("touchstart",listener)
      return () => {
         document.addEventListener("mousedown",listener)
         document.addEventListener("touchstart",listener)
         
      }
   },[])
}

export default useOnClickOutside