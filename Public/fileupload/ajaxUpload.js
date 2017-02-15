/**
 * Created by Administrator on 2015/12/15.
 */

function ajaxUpload(data,postUrl,success,err,progress) {

    var oData = new FormData();
     for (var item in data)
    {
        oData.append(item, data[item]);
    }
    //oData.append("CustomField", "This is some extra data");
    var oReq = new XMLHttpRequest();
    oReq.open("POST", postUrl, true);
    oReq.onload = function (oEvent) {
        if (oReq.status == 200) {
            if (success) success(JSON.parse(oReq.responseText));
        } else {
            if (err) err(JSON.parse(oReq.responseText));
        }
    };
    oReq.upload.onprogress = progress
    oReq.send(oData);
}