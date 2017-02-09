/**
 * Created by Administrator on 2017/2/8.
 */
var videoPlay = $("#videoPlay").children;
//console.log(videoPlay[0]);
var videoPlayList = videoPlay.length;
function play(t){
    $(t).children('.videoImg').css("display", "none");
    $(t).children('.play').css("display", "none");
    $(t).children('video')[0].play();
   /* videoPlay[0].style.display='block';
    $(videoPlay[0]).css("display", "block");
    for(var v = 1; v < videoPlayList; v++){
        videoPlay[v].style.display='none';
        console.log(1);
    }*/
}

/*
$.ajax({
    type: "post",
    //http://localhost:8888/loan/me/bidDetail/1/sys
    url: "http://baobab.kaiyanapp.com/api/v1/feed",
    async: false,
    dataType: "json",
    success: function (data) {
        console.log(data);
        var videoList = data.dailyList[0].videoList;
        var videoLength = videoList.length;
        console.log(videoLength);
        for(var v= 0; v++; v<videoLength){
            $('#videoList')[v].children("title")
        }
        //console.log(data.dailyList[0].videoList[0].title);
        toView(data);
    }
});*/
var app = angular.module('kaiyan', []);

app.controller('eye', function ($scope, $http) {
    $http.get('http://baobab.kaiyanapp.com/api/v1/feed').success(function (data) {

        var videoList = data.dailyList[0].videoList;
        $scope.videoList = videoList;

        console.log(videoList);
    }).error(function(){
        alert("提交失败");
    })
})
