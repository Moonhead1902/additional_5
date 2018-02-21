module.exports = function check(str, bracketsConfig) {
    var steck = [];


    for (var i = 0; i < str.length; i++){
        for (var j = 0; j < bracketsConfig.length; j++){
            if (bracketsConfig[j][0] == bracketsConfig[j][1] && str[i] == bracketsConfig[j][0]){
                if (steck[steck.length-1] == 0 || steck[steck.length-1] != str[i]){
                    steck.push(str[i]);
                    break;
                } else {
                    steck.pop();
                    break;
                }
            }

            if (str[i] == bracketsConfig[j][0]){
                steck.push(str[i]);
                break;
            } else if (str[i] == bracketsConfig[j][1]){
                if(steck.length != 0){
                    if(steck[steck.length-1] == bracketsConfig[j][0]){
                        steck.pop();
                        break;
                    } else return false;
                } else return false;
            }
        }
    }
        return (steck.length == 0);
}
