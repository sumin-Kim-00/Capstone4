
$(document).ready(function() {
    firstBotMessage();
});


function replaceEnter(str)
{
    if (str == undefined || str == null) return "";

    str = str.replace(/\r\n/ig, '<br>');
    str = str.replace(/\\n/ig, '<br>');
    str = str.replace(/\n/ig, '<br>');
    return str
}



function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');
var xhr;

function sendAsk() {
    ctext = document.getElementById("chattext").value;
    if(ctext == "") {
        document.getElementById("chattext").focus();
        return false;
    }

    addtext = "<div class='chatMe'> <span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += addtext;
    
    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;

    var strurl = "chat?chatinput=" + ctext;
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;


    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;

            var obj = JSON.parse(data);
            
            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;


                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
            
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);

}


function speechAsk() {
    document.getElementById("micArea").style.backgroundColor = "#007bff";
    document.getElementById("micPic").style.filter = "invert(100%)";
    //console.log("clicked");

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;

            var obj = JSON.parse(data);

            // 정상
            if(obj.flag == "0"){
                ans = obj.speechtext;
                //console.log(ans);
                document.getElementById("chattext").value = ans;
                sendAsk();
                
                remove = document.getElementById('micArea');
                remove.removeAttribute('style');

                remove = document.getElementById('micPic');
                remove.removeAttribute('style');

            }

             // OSError - ex) 마이크 없음
             else if(obj.flag == "1"){
                ans = obj.speechtext;
                //console.log(ans);
                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;
                
                remove = document.getElementById('micArea');
                remove.removeAttribute('style');

                remove = document.getElementById('micPic');
                remove.removeAttribute('style');
            }
        }
    };

    xhr.open("POST", "speechtottext");
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);

}

function cn_btn_course() {
    ctext = event.target.value;
    bottext = "<div class='chatMe'><span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += bottext;

    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;

    var strurl = "chat?chatinput=" + ctext + " 강의 출석";
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;

            var obj = JSON.parse(data);

            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;

                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);
}


function cn_btn_course() {
    ctext = event.target.value;
    bottext = "<div class='chatMe'><span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += bottext;

    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;
    var strurl = "chat?chatinput=" + ctext + " 강의 출석"; 

    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;
            var obj = JSON.parse(data);

            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;

                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);
}

function cn_btn_thisweekcourse() {
    ctext = event.target.value;
    bottext = "<div class='chatMe'><span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += bottext;

    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;
    var strurl = "chat?chatinput=" + ctext + " 이번주 강의 출석"; //이 줄을 밑 주석으로 바꿔서 
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;
            var obj = JSON.parse(data);

            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;

                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);
}


function cn_btn_assign() {
    ctext = event.target.value;
    bottext = "<div class='chatMe'><span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += bottext;

    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;

    var strurl = "chat?chatinput=" + ctext  + " 과제 제출";
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;
    
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;

            var obj = JSON.parse(data);

            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;


                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);
}

function cn_btn_thisweekassign() {
    ctext = event.target.value;
    bottext = "<div class='chatMe'><span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += bottext;

    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;

    var strurl = "chat?chatinput=" + ctext  + " 이번주 과제 제출";
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;
    
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;

            var obj = JSON.parse(data);

            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;


                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);
}


function cn_btn_grade() {
    ctext = event.target.value;
    bottext = "<div class='chatMe'><span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += bottext;

    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;

    var strurl = "chat?chatinput=" + ctext + " 성적 확인";
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;

            var obj = JSON.parse(data);

            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;


                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);
}

function cn_btn_notice() {
    ctext = event.target.value;
    bottext = "<div class='chatMe'><span>" + ctext + "</span></div>";
    document.getElementById("chatbox").innerHTML += bottext;

    loadingText = '<div class="chatBot"><span><div class="loading dot" id="loading"><div></div><div></div><div></div></div></span></div>'
    document.getElementById("chatbox").innerHTML += loadingText;

    var strurl = "chat?chatinput=" + ctext + " 공지 확인";
    var objDiv = document.getElementById("chatbox");
    objDiv.scrollTop = objDiv.scrollHeight;

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = xhr.responseText;

            var obj = JSON.parse(data);

            if(obj.flag == "0"){
                ans = obj.chatanswer;

                div = document.getElementById('loading');
                divParent = div.parentNode.parentNode;
                divParent.remove();

                bottext = "<div class='chatBot'><span>" + ans + "</span></div>";
                document.getElementById("chatbox").innerHTML += bottext;


                var objDiv = document.getElementById("chatbox");
                objDiv.scrollTop = objDiv.scrollHeight;

                document.getElementById("chattext").value = "";
                document.getElementById("chattext").focus();
            }
        }
    };

    xhr.open("GET", strurl);
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.send(null);
}



function open_menu(){
    document.getElementById("menu").style.display = "block";
    document.getElementById("shade").style.display = "block";
}

function close_menu(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("shade").style.display = "none";
}

function logout(){
    var cookieName = getCookie("username");

    console.log(cookieName);

    document.cookie = 'sessionid=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    if (cookieName != null){
        document.cookie = 'username=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'password=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    sessionStorage.clear();
    location.reload();
}

