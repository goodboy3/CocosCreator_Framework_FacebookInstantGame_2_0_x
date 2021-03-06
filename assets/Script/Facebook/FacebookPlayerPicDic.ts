import CSDictionary from "../Utility/CSDictionary";


// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;


export default class FacebookPlayerPicDic  {

    //属性声明
    // @property(cc.Label)     // 使用 property 装饰器声明属性，括号里是属性类型，装饰器里的类型声明主要用于编辑器展示
    // label: cc.Label = null; // 这里是 TypeScript 用来声明变量类型的写法，冒号后面是属性类型，等号后面是默认值

    // 也可以使用完整属性定义格式
    // @property({
    //     visible: false
    //     displayName: "Score (player)"
    //     tooltip: "The score of player"
    // })
    // text: string = 'hello';


    //玩家头像目录
    static playerPicMap: CSDictionary<string, cc.SpriteFrame> = new CSDictionary<string, cc.SpriteFrame>();//<playerId,头像>
    
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    // onEnable() {}
    // start() {}
    // update(dt) {}
    // lateUpdate(dt) {}
    // onDisable() {}
    // onDestroy() {}

    static AddToPlayerPicDic(playerID:string,playerPicUrl:string)
    {
        if (!FacebookPlayerPicDic.playerPicMap.ContainsKey(playerID)) 
        {
            let pic = new cc.SpriteFrame();
            FacebookPlayerPicDic.playerPicMap.Add(playerID, pic);
            cc.loader.load(playerPicUrl, function (err, texture)
            {
                let playerPic = FacebookPlayerPicDic.playerPicMap.TryGetValue(playerID);
                playerPic.setTexture(texture);
            }.bind(this));
        }
    }

    static GetPlayerPic(id:string)
    {
        return FacebookPlayerPicDic.playerPicMap.TryGetValue(id);
    }
}
