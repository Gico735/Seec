/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
//          var aa = -1;
//        var bb = -1;
//        var b_array = [0,0,0,0,0,0,0,0,0,0];
//        var tmp_array = [0,0,0,0,0,0,0,0,0,0];
//        var arrFirst;
//        var arrSecond;
//        
//        function ten (value) {
//            var tmp = 1;
//       
//            while (value !=0) {
//                tmp = tmp*10
//                value--;
//            }
//            return tmp;
//        }
//        
//        function lengthint(value){
//            var tmp = 0;
//            if (value != 0) tmp =1;
//            
//            while (value!=0){
//                value = value/10;
//                tmp++;
//            }
//            return tmp;
//        }
//        
//        function readnum() {
//            arrFirst = $("#first").val();
//             arrSecond = $("#second").val();
//            
//            for (i=0;i<20-arrFirst.length;i++) {
//                $("#log").append(" ");
//            }
//            if(arrFirst>=0){
//                $("#log").append(" ");
//                aa == aa*(-1);
//            }
//            $("#log").append(arrFirst);
//        
//        
//            for (i=0;i<20-arrSecond.length;i++) {
//                $("#log").append(" ");
//            }
//            if(arrSecond>=0){
//                $("#log").append(" ");
//                bb == bb*(-1);
//            }
//            $("#log").append(arrSecond,'\n');
//        
//        arrFirst = Math.abs(arrFirst);
//        arrSecond = Math.abs(arrSecond);
//        $("#log").append("--------------------\n");
//        }
//        
//        function parsenum (temp_b) {
//            var num=0;
//            while(temp_b!=0) {
//                b_array[num] = temp_b % 10;
//                temp_b = temp_b / 10;
//                num++;
//            }
//        }
//        
//        function math(){
//            var tmp = 0;
//            
//            for (i=0;i<arrSecond.length;i++){
//                tmp_array[i] = arrFirst * b_array[i];
//                for(j=0;j<21-(tmp_array[i].length)-i;j++){
//                    $("#log").append(" ");
//                }
//                $("#log").append(tmp_array[i],'\n');
//            }
//            $("#log").append("   --------------\n");
//            
//            for (i=0; i<arrSecond.length;i++){
//                tmp = tmp + (tmp_array[1])*ten(i);
//            }
//            
//            for (i=0;i<20-tmp.length;i++){
//                $("#log").append(" ");
//            }
//            tmp = tmp*aa*bb;
//            if(tmp>=0){
//                $("#log").append(" ");
//            }
//            $("#log").append("/\d/\n",tmp);
//        }
        
        let oneNum = [];
        let twoNum = [];
        let oneInput;
        let twoInput;
        
        function ReadNums() {
            
            oneNum = [];
            twoNum = [];
            oneInput = $("#first").val();
            twoInput = $("#second").val();
            for (i=0; i<oneInput.length; i++){
                oneNum[i] = oneInput[i];
            }
            for (i=0; i<twoInput.length; i++){
                twoNum[i] = twoInput[i];
            }
            $("#log").append(oneNum,'\n',twoNum,'\n____________\n');
            return oneNum, twoNum;
        }
        
        function Math () {
            let lengthStr = oneNum.length+twoNum.length-1;
            let sum = [0,0,0,0,0,0,0,0,0,0];
                    let k = 0;
            let time = 0;
            
            for (i=twoNum.length-1; i>-1; i--) {
                    k = 0+time;
                    time++;
                    sum = [0,0,0,0,0,0,0,0,0,0];
                for (j=oneNum.length-1; j>-1; j--) {
                    let firstSum = (oneNum[j]*twoNum[i])+[];
                     if (firstSum.length != 2){
                         sum[k] += +(firstSum[0]);
                         k++;
                     }else {
                         sum[k] += +firstSum[1];
                         sum[k+1] += +firstSum[0];
                         k++;
                     }
                }
                
                  for (q=sum.length-1; q>-1 ; q--) {
                    if (sum[q] == 0) {
                        $("#log").append(' ');
                    } else {
                        $('#log').append(sum[q]);
                    }
                }
               $("#log").append('\n');
            }
            $("#log").append('____________\n');
            let multy = +(oneInput)*+(twoInput);
            let space = 10 - (multy+[]).length;
                while (space > 0){
                    $("#log").append(' ');
                    space--;
            }   
            $("#log").append(multy,'\n');
        }
        
     
            
        $("#multiply").click(function(){
//            readnum();
//            parsenum(arrSecond);
//            math();
            
            ReadNums();
            Math();
            console.log(oneNum,twoNum);
        })

        console.log('Received Event: ' + id);
    }
};
