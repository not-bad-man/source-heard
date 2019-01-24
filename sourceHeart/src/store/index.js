import vue from 'vue'
import vuex from 'vuex'
import { Store } from 'vuex'

vue.use(vuex);

var store = new Store({
   state: {
      storyList: [
         {
            title: '小和尚砍树',
            content: [{
                  item: '从前，小和尚奉方丈之命要移栽一棵树，他信心满满的干了起来。谁知道刚挖了几下，搞头就断了',
                  itemSrc: '../../static/img/story1/3.jpg',
               },
               {
                  item: '于是小和尚带着斧头去另一个村子找到铁匠，铁匠苦笑着对他说：“我的木炭刚用完，你看……”',
                  itemSrc: '../../static/img/story1/2.jpg',
               },
               {
                  item: '几天之后，他正提着几包草药匆匆向村子中赶。大家问他买药干什么，他说为牛治病，又问他为牛治病干什么，他说要用牛车运木料……挖树的事，他早已忘到九霄云外了',
                  itemSrc: '../../static/img/story1/4.jpg'
               },
            ],
            src: '../../static/img/story1/1.jpg'
         },
         {
            title: '那就是海',
            content: [{
                  item: '我是一只快乐的蜗牛。有一天妈妈对我说：“在远方有海，但是从来没有一个蜗牛见过！而看见海是每只蜗牛的梦！”但是为什么所有的蜗牛都没见过海？\n 妈妈说，大海太远了，不会有蜗牛看见的！但是，我不相信，知道有海的存在，那么海就是我的梦！我决定了，出发吧！ ',
                  itemSrc: '../../static/img/story2/1.jpg',
               },
               {
                  item: '路上我遇见了乌龟先生，他心疼地说：回去吧，孩子！你若再执着到不了就会丧命啊！此刻，我突然明白，阻止我向前的不仅仅有困苦磨难，还有那些“为你好”的善良人！而一句“为你好”也许比千难万险更难跨越！但是，我知道要学会选择，学会坚持，继续才是我的选择。如果因为一句话放弃了梦想，那么只是蜗牛的我还能做什么了？',
                  itemSrc: '../../static/img/story2/3.jpg',
               },
               {
                  item: '走着走着，这路上只有我一个人了！孤独，也向我袭来，夜间也会一个人默默流泪。\n 于是，我开始纠结，那个遥不可及的目标，我还能坚持下去吗？\n可是，这一切我都不害怕，苦难重重，千山万水，万般阻隔都击垮不了我寻梦的心，我愿意，一次又一次，跌倒再爬起，紧咬牙关前行！\n我就是我，一切苦难都来吧，我只记住四个字“不忘初心”背起行囊，重新起航！\n',
                  itemSrc: '../../static/img/story2/5.jpg'
               },
               {
                  item: '\n直到有一天，我见到了一缕蓝光，那里星星闪耀，别人告诉我，那就是海',
                  itemSrc: '../../static/img/story2/4.jpg'
               }
            ],
            src: '../../static/img/story2/bgc.jpg'
         }, {
            title: '“玫瑰”再次绽放',
            content: [{
                  item: '他曾是天之骄子，风城的玫瑰，史上最年轻的MVP。2008年罗斯在第一轮第一顺位被公牛选中，以状元身份进入NBA。这一年，科比是NBA第一人，在联盟大杀四方，科比被誉为在乔丹之后最接近乔丹的人，罗斯以状元身份来到芝加哥公牛，冥冥之中被认为是乔丹的接班人。',
                  itemSrc: '../../static/img/story3/0.jpg',
               },
               {
                  item: '玫瑰虽美，烟花易冷。2012年NBA揭幕战比赛中，罗斯在突破时意外受伤，导致左膝前十字韧带撕裂。自此伤病找上了罗斯，2013-14赛季，在对阵开拓者的比赛中罗斯右膝半月板撕裂，赛季报销。2015年罗斯右膝内侧半月板撕裂，2017年罗斯左膝半月板撕裂。2017年骑士以210万美元的合同签下罗斯，没错，只有210万，2018年森林狼再次以210万美元签下罗斯，直到赛季结束',
                  itemSrc: '../../static/img/story3/1.jpg',
               },
               {
                  item: '2018年11月1日，罗斯在比赛中得到了50分，在比赛中罗斯无所不能，极限拉杆，空接暴扣。罗斯用自己的实际行动告诉世人玫瑰依然在绽放。在赛后采访时罗斯动情落泪，30岁的男人掉下了眼泪。',
                  itemSrc: '../../static/img/story3/4.gif'
               },
               {
                  item: '罗斯说道：“每天都在努力训练，今天的表现对自己来说意味着一切。”玫瑰再次盛开，还是我们熟悉的罗斯。历经伤病，历经质疑，归来仍是少年。无法想象罗斯是如何在伤病与质疑中走到今天，但是罗斯重新站了起来，这就足够了。他一直用自己的方式坚守着篮球梦，加油罗斯，你是超级英雄。',
                  itemSrc: '../../static/img/story3/6.jpg'
               }
            ],
            src: '../../static/img/story3/11.jpg'
         }
      ],
      messages: [
         {
            imgUrl: '../../static/img/bgImg/1.jpg',
            text: '总有一份执着是需要等待的。余生很长，莫要慌张，以梦为马，不负韶华。不忘初心，不放弃，不忘记，不抛弃！'
         },
         {
            imgUrl: '../../static/img/bgImg/2.jpg',
            text: '此刻的离别，我们沉默不语，不经世的我们，约好下一个路口等'
         },
         {
            imgUrl: '../../static/img/bgImg/3.jpg',
            text: '别人拥有的，你不必羡慕，只要努力，你也会拥有；自己拥有的，你不必炫耀，因为别人也在奋斗，也会拥有。不忘初心，开心比拥有更重要'
         },
         {
            imgUrl: '../../static/img/bgImg/4.jpg',
            text: '我从来没有说过我多好，可是，我也没有想象中的那么坏，不忘初心，方得始终，我就是我，不一样的烟火'
         },
         {
            imgUrl: '../../static/img/bgImg/5.jpg',
            text: '不要因为走太远，忘了为什么出发'
         },
         {
            imgUrl: '../../static/img/bgImg/6.jpg',
            text: '一路走来，越过高山，渡过汪洋，你是否还是年少模样'
         }
      ],
      touchingWord: [
         '初心易得，始终难守',
         `
         春去秋来，寒来暑往，
         
         走在匆匆教育之路上的我们，
         
         其实早已深知：
         
         没有守望，何来期许，
         
         没有芬芳，何来桃李，
         
         没有时光，何来花开。
         
         有一种美叫等待——
         
         稳稳地等待，
         
         虽然我们气定神闲，芬芳在握，
         
         却要熬过严冬，傲视冰霜。
         
         也许，
         
         也许他们还是我们眼中稚气的孩童，
         
         但他们终有一天会走向社会，
         
         也许，
         
         也许他们还不够丰盈，
         
         但他们正在汲取，
         
         也许，
         
         也许他们还不够成熟，
         
         但他们在慢慢成长……
         
         抱怨、倦怠会洗礼我们，
         
         但伴随、责任才会使然我们
         
         守稳初心，静待花开！`
      ]
   }
})


var isFirst = localStorage.getItem('isFirst');
window.onload = function () {
   var messages = store.state.messages;
   messages = new Array();
   var index = 0;
   console.log('isFirst', !isFirst)
   if(!isFirst) {
      return;
   }
   while(!!localStorage.getItem(index)) {
      var message = localStorage.getItem(index);
      messages.push({
         imgUrl: message.split("$$")[0],
         text: message.split("$$")[1],
      })
      index ++;
   }
   store.state.messages = messages;
   // console.log(messages);
   localStorage.clear();
}

window.onunload = function () {
   var messages = store.state.messages;
   var len = messages.length;
   for (var i = 0; i < len; i ++) {
      localStorage.setItem(String(i), messages[i].imgUrl + "$$" + messages[i].text);
   }
   localStorage.setItem('isFirst', 'no');
   // localStorage.clear();
   return false;
}


export default store;
