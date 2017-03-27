//HTML태그를 미리 만들어서 변수에 담았다.
//필요에 따라 수정해도 좋다.

var HTMLName = '<h1 id="name">%data%</h1>',
    HTMLAge = '<span>%data%</span>',
    HTMLEducation = '<span>%data%</span>',
    HTMLMajor = '<span>%data%</span>',
    HTMLPhone = '<span>%data%</span>',
    HTMLEmail = '<span>%data%</span>',
    HTMLAddress = '<span>%data%</span>',
    HTMLDescription = '<span>%data%</span>';


//자기소개에 필요한 정보를 담았다.
//필요에 따라 추가해도 좋다.

// used to keep track of how much information is being displayed
var count = 0;

var model = {
  name: "김재영",
  age: "28",
  education: "건국대학교",
  major: "응용통계학과 + 컴퓨터공학과",
  phone: "010-2632-4778",
  email: "grit0614@gmail.com",
  address: "서울시 관악구",
  description: "잘 부탁드립니다.",

  display: function (){
    
    //HTML태그의 %data%를 모델의 값으로 대체하기
    var NewName = HTMLName.replace("%data%", model.name);
    var NewEducation = HTMLEducation.replace("%data%", model.education);
    var NewMajor = HTMLMajor.replace("%data%", model.major);
    var NewPhone = HTMLPhone.replace("%data%", model.phone);
    var NewEmail = HTMLEmail.replace("%data%", model.email);
    var NewAddress = HTMLAddress.replace("%data%", model.address);
    var NewDescription = HTMLDescription.replace("%data%", model.description);

    // 원하는 위치에 추가하기
    // jquery selector를 이용해서, 동적으로 원하는 위치에 미리 만들어둔 HTML 태그를 추가한다.

    // $('.selector').append(NewName);
    // $('.selector').prepend(NewAge);

    $('.selector').append(Object.keys(model)[count] + " : " + Object.values(model)[count] + '</br>');
    count++;

    // updates the innerHTML of button
    document.getElementById('button').innerHTML = "더 보기 (" + count + " / 8)";

    // disables button after last bit of information is displayed
    if (count == Object.keys(model).length-1) { 
      document.getElementById("button").className = "btn btn-primary btn-lg disabled"; 
      document.getElementById('button').innerHTML = "끝!";
    }
  }
}

//수정불가
//컨트롤러를 통해서 model.display를 실행합니다.
function controller(){
  // model.display();
  document.getElementById('button').innerHTML = "더 보기";
}

controller();


