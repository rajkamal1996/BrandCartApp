
$(document).ready(function() {
      $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/krcr5',
        datatype: 'JSON',
        contentType: 'application/json; charset=utf-8',
            success: function(datareceive) {
                $('#scrolltable').attr("class","scroll")
                var mytablejs=document.getElementById("mytable1");
                var row,j;
                var n=Object.keys(datareceive).length;
                for(var i=0;i<n;i++){
                    j=i+1;
                    row = mytablejs.insertRow(j);
                    var id = row.insertCell();
                    var name = row.insertCell();
                    var job = row.insertCell();
                    id.innerHTML=datareceive[i].id;
                    name.innerHTML=datareceive[i].name;
                    job.innerHTML=datareceive[i].job;

                }
            },
            error: function(error) {
                alert("error");
            }
        });

});
