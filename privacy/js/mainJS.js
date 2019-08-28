/* Copyrights-Developed by Qudos Technologies INC. */
angular.module('qudosLegal').controller('homeCtrl',['$scope','$http','$state','$timeout', function($scope,$http,$state,$timeout) {
    console.log("asdf");
    $scope.nodes=[];
    if($(window).width()<800){
        $scope.mobileContent=1;
        $scope.viewContent=1;
        $scope.viewMenu=0;
        $scope.viewDoc=1;
    }
    else {
        $scope.mobileContent=0;
        $scope.viewContent=1;
        $scope.viewMenu=1;
        $scope.viewDoc=0;
    }
    $scope.viewDocs = function() {
        if($(window).width()<800){
            $scope.viewContent=!$scope.viewContent;
            $scope.viewMenu=!$scope.viewMenu;
            $scope.viewDoc=!$scope.viewDoc;
        }
    }
    var privacy = {
        title: 'Privacy Statement',
        open: 'privacy1',
        _id: '1',
        active: true,
        nodes: [{
            title: 'Privacy Policy',
            open: 'privacy1',
            _id: '11',
            active: true,
            nodes: []
        },{
            title: 'Information and Data We Collect From You',
            open: 'privacy2',
            _id: '12',
            active: false,
            nodes: []
        },{
            title: 'Use of Personal Information',
            open: 'privacy3',
            _id: '13',
            active: false,
            nodes: []
        },{
            title: 'Sharing of Information',
            open: 'privacy4',
            _id: '14',
            active: false,
            nodes: []
        },{
            title: 'California Privacy Rights',
            open: 'privacy5',
            _id: '15',
            active: false,
            nodes: []
        },{
            title: 'How to Edit/Delete Your Information',
            open: 'privacy6',
            _id: '16',
            active: false,
            nodes: []
        },{
            title: 'Choice/Opt-Out',
            open: 'privacy7',
            _id: '17',
            active: false,
            nodes: []
        },{
            title: 'Special Cases in Which We Share Personal Information',
            open: 'privacy8',
            _id: '18',
            active: false,
            nodes: []
        },{
            title: 'Changing our Privacy Policy',
            open: 'privacy9',
            _id: '19',
            active: false,
            nodes: []
        },{
            title: 'Contacting Qudos',
            open: 'privacy10',
            _id: '10',
            active: false,
            nodes: []
        }]
    };
    $scope.nodes.push(privacy);
    $scope.highlight= function () {
        var parentId=$scope.nodes[0]._id;
        var id=$scope.nodes[0].nodes[0]._id;
        $timeout(function(){
            $('.nodeInTree').removeClass('visitedNode');
            $('#node-'+parentId).addClass('visitedNode');
            $('#node-'+id).addClass('visitedNode');
            $('.privacy1').css('display','block');
        },100);
    };
    $('.privacy1').css('display','block');
    $scope.getOpen=function(open,id){
        $('.contentSubDivs').css('display','none');
        $('.'+open).css('display','block');
        // if(parseInt(id)<10){
        //   $scope.nodes[id-1].nodes[0].active=true;
        // }
        // $('#node-'+id).parent('.nodeInTree').addClass('visitedNode');

    };
    $scope.toggle1 = function (scope,nodeId) {
        scope.toggle();
        // $('.nodeInTree').removeClass('visitedNode');
        // $('#node-'+nodeId).parent('.nodeInTree').addClass('visitedNode');
        $timeout(function() {
            /*angular.element("#node-"+id).triggerHandler('mouseenter');*/
            //angular.element(".nodeInTree").scope().collapsed=false;
            //angular.element("#node-"+id).scope().collapsed=true;
            $scope.TraversedList=[];
            function recurs(list,parentList,index){
                var i;
                //console.log(list);
                if(list.length>=0) {
                    for (i = 0; i < list.length; i++) {
                        // console.log(list[i]._id);
                        //console.log(list[i]);
                        // console.log(column.parent_id);
                        // console.log($scope.TraversedList);
                        if ($.inArray(list[i]._id, $scope.TraversedList) != -1){
                            continue;
                        }
                        if (list[i]._id == nodeId) {

                            console.log(parentList);
                            console.log(index);
                            list[i].active=true;
                            // if(list[i].active==true)list[i].active=false;
                            // else
                            console.log(list[i]);
                            if(index)$scope.nodes[index].active=true;
                            if(index===undefined){
                                $scope.collapseAll();
                            }
                            i++;
                            for(i;i<list.length;i++)list[i].active=false;
                            $scope.$apply();
                            return list[i];
                        }
                        else {
                            list[i].active=false;
                            $scope.TraversedList.push(list[i]._id);
                            // console.log(list[  i]);

                            if (list[i].nodes.length > 0)
                                recurs(list[i].nodes,list,i);
                            else {
                                continue;
                            }
                        }
                    }
                    //console.log(i);
                    //console.log(list);
                    if(i==list.length){
                        // console.log(list);
                        // console.log(parentList);
                        return list;
                    }
                }

            }
            recurs($scope.nodes,$scope.nodes);
            // $scope.nodes[0].active=true;
        }, 10);
    };
    $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
    };
    $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
    };
}]);
