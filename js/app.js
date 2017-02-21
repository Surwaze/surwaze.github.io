var app = angular.module('surwaze', []);
app.controller('ctrl1', function($scope) {
    var token;
    var api_question_url;
    $scope.test = "Hello From Angular";
    //Runs On Document Ready Event.
    angular.element(document).ready(function() {
        // document.getElementById('msg').innerHTML = 'Hello';
        token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJhZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiYWRtaW4iOnRydWUsInBhc3N3b3JkIjp0cnVlLCJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOiJhd2Vzb21lUGFzc3dvcmQiLCJuYW1lIjoiTGl2aW4gTWF0aGV3IiwiX2lkIjoiNThhNWJiNzgyNTQ1NjQ1M2IzY2NjNzk0In0sImlhdCI6MTQ4NzI1NzEyNCwiZXhwIjoxNDg3NzgyNzI0fQ.18iLU6fudAUkQ4jQEGneOrnNTUt8eek_-LRAUCKMJrU";
        api_question_url = "http://api.surwaze.com/questions";
        api_question_url_with_token = api_question_url + "?token=" + token;
        $.ajax({
            data: {
                'token': token
            },
            url: api_question_url,
            // beforeSend: function(xhr) { xhr.setRequestHeader('x-access-token', token); },
            success: function(result) {
                console.log(result);

                $scope.questions = result;

                $scope.$digest();

            }
        });
        $scope.newQuestion;
        $scope.newOptions=[];
        $scope.insertData = function() {
            console.log($scope.newQuestion);
            console.log($scope.newOptions);
            $scope.newOptions[0].sl="a";
            $scope.newOptions[1].sl="b";
            $scope.newOptions[2].sl="c";
            $scope.newOptions[3].sl="d";
            var push_data=JSON.stringify({
                question:$scope.newQuestion,
                options:$scope.newOptions,
            });
            $scope.questions.unshift($scope.newQuestion);
            console.log(push_data);
            $.ajax({
                data:{push_data},
                dataType: 'json',
                type: 'POST',
                url: api_question_url_with_token,
                success: function(result) {
                    console.log(result);

                }
            });

        }

    });
});
