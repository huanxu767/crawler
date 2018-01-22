var node;
function tran(){
    node = $.trim($("#code").val());
    var sql = "";
    var title;
    var threshold;
    var nodes = node.split("\n");
    var currentKey;
    var firstFlag = true;
    for(var i = 0;i<nodes.length;i++){
        if(i == 0 ){
            title = nodes[i];
            continue;
        }
        if(i == 1 ){
            continue;
        }
        if(i == 2 ){
            // console.log(nodes[i].lastIndexOf(" ") + "  " +nodes[i].length);
            threshold = nodes[i].substring(nodes[i].lastIndexOf(" ")+1,nodes[i].length);
            sql += threshold+" threshold,\n";
            // console.log(threshold);
            continue;
        }
        if(i == 3){
            currentKey = getKey(nodes[i]);
        }
        var key = getKey(nodes[i]);
        var nodeType = nodes[i].indexOf("(") != -1;

        if(firstFlag){
            firstFlag = false;
            if(nodeType){
                sql += " CASE ";
            }else{
                sql += " CASE  " + key +" ";
            }
        }

        if(currentKey != key){
            //换另一个key
            sql += " ELSE 0 END " + currentKey +",\n";
            if(nodeType){
                sql += " CASE ";
            }else{
                sql += " CASE  " + key +" ";
            }
            currentKey = key;
        }

        if( nodeType ){
            //范围型
            sql += "WHEN "+key+ getMax(nodes[i])+" THEN "+key+"*"+ getValue(nodes[i]) +"\n";
            // console.log("WHEN "+key+ getMax(nodes[i]) +" THEN "+key+"*"+ getValue(nodes[i]));
        }else{
            //值类型
            sql += "WHEN " +getKeyValue(nodes[i])+" THEN "+key+"*"+ getValue(nodes[i]) +"\n";
        }
        if( i + 1 == nodes.length ){
            sql += " ELSE 0 END " + currentKey +"";
        }
    }
    console.log(sql);
    $("#sql").html(sql);

}

function getKey(data){
    return data.substring(data.indexOf("Attrib")+7,data.indexOf("="));
}
// 获取最后值
function getValue(data){
    return $.trim(data.substring(data.lastIndexOf(" ")));
}

function getKeyValue(data){
    data = data.substring(data.indexOf("Attrib")+7);
    return data.substring(data.indexOf("=") + 1,data.indexOf(" "));
}
function getMax(data){
    data = data.substring(data.indexOf("'"),data.lastIndexOf("'"))
    if(data.indexOf("inf)") != -1){
        // (1.435944-inf)
        return ">"+ data.substring(2,data.lastIndexOf("-"));
    }else if(data.indexOf("(-inf") != -1){
        // (1.435944-inf)
       return "<="+ data.substring(data.indexOf("-inf")+5,data.lastIndexOf("]"));
    }else{
        // (0.161911-0.509374]  (-0.185553-0.161911]  (-0.764659--0.533016]
        if(data.indexOf("--") != -1){
            // (-0.764659--0.533016]
           return ("<="+ data.substring(data.indexOf("--")+1,data.lastIndexOf("]")));
        }else if(data.indexOf("(-") != -1){
            // (-0.185553-0.161911]
            return ("<="+ data.substring(data.lastIndexOf("-")+1,data.lastIndexOf("]")));
        }else{
            // (0.161911-0.509374]
            return ("<="+ data.substring(data.indexOf("-")+1,data.lastIndexOf("]")));
        }
    }

}


