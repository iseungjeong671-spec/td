function addTodo() {

  // 1. 입력값 가져오기
  let input = document.querySelector("#todoInput");
  let text = input.value.trim();

  // 2. 빈 입력 확인
  if (text === "") {
    alert("할 일을 입력하세요.");
    return;
  }

  // 3. 새로운 li 요소 생성
  let newItem = document.createElement("li");

  // 4. 텍스트 지정
  newItem.textContent = text;

  // 5. 목록에 추가
  document.querySelector("#todoList").append(newItem);

  // 6. 입력창 초기화
  input.value = "";
}