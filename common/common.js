var LIDS = ['000001011111', '000101010111', '010101010101', '110101010100', '111101010000', '111111000000', '111110100000', '111010101000', '101010101010', '001010101011', '000010101111', '000000111111', '101010101010', '000010101111', '111111000000', '110101010100', '000001011111', '001010101011', '000000111111', '111110100000', '010101010101', '111010101000', '111101010000', '000101010111'];
// var TIDS = ['001010101011', '000010101111', '000000111111', '000001011111', '000101010111', '010101010101', '110101010100', '111101010000', '111111000000', '111110100000', '111010101000', '101010101010', '000000111111', '000101010111', '101010101010', '111110100000', '110101010100', '000001011111', '010101010101', '001010101011', '111111000000', '000010101111', '111010101000', '111101010000'];
var TIDS = ['000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000'];
var TASKS = ['3122001302033210010201333033223012002111330201200121', '3132101330331021330211030022202301022031200203101021', '3222010303321023010321030322312011112002330200100131', '1112033030120312201013021023223321022320000003130131', '2023001202131310031210110013300002021303223202331132', '2010012103103322231011123201300310321002322030100323', '3223310203113130211122100033100231303010220220000213', '1012131202121002333233110332310130020021320200000123', '3122111203100302032221233030303310002010220310301121', '2132223220103030011313110033200120331231103002200021', '2013000102021332121231120033103320321021320300300112', '3120111302103001021331202323203110122020031002300323', '3320201120100031120303023111311212033220203100022330', '2002011332103301132022230132122110330020103010302301', '3322100313221023121310020022003102112013030310200331', '1022010221113030303122030232201101132012310300300233', '3202101200130320131232330023203110210010202310310321', '2122120212030230312313021133200330021030311100000321', '3122120202121032003031130223203010130130130211000323', '1211203133023012322101000212303022320011210301000333'];
var WORDS, DEFINITIONS;

function browserCheck(task) {
    var isChromium = window.chrome,
        isGoogle = window.navigator.vendor === "Google Inc.",
        isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
        isIEedge = window.navigator.userAgent.indexOf("Edge") > -1,
        isWindows = window.navigator.userAgent.indexOf("Win") > -1;
    if(isChromium && isGoogle && !isOpera && !isIEedge && (task != 'learn' || isWindows)) {
        // is Google chrome
    } else {
        // not Google chrome
        if (task == 'learn') {
            alert('Please use Chrome on Windows to view this page.');
        } else {
            alert('Please use Chrome to view this page.');
        }
        $('*').hide();
        window.close();
    }
}
function deparam(querystring) {
    // remove any preceding url and split
    querystring = querystring.substring(querystring.indexOf('?')+1).split('&');
    var params = {}, pair, d = decodeURIComponent, i;
    // march and parse
    for (i = querystring.length; i > 0;) {
        pair = querystring[--i].split('=');
        params[d(pair[0])] = d(pair[1]);
    }
    return params;
};
Array.prototype.shuffle = function shuffle(){
    o = this.slice();
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var url = window.location.href,
    params = deparam(url.substring(url.indexOf('?') + 1));
if (['4', '10'].indexOf(params.pid) >= 0) {
    // old words
    var WORDS = [
        'bail', 'banquet', 'bequeath', 'brat', 'broil', 'candid', 'cripple', 'delirium', 'depot', 'diabetes', 'dictatorship', 'emissary', 'falter', 'foyer', 'genealogy', 'ginger', 'gospel', 'groan', 'hassle', 'hemorrhage', 'hunch', 'imbecile', 'indulge', 'infantry', 'inferior', 'instantaneous', 'malfeasance', 'melancholy', 'membrane', 'monopoly', 'mortgage', 'onslaught', 'platoon', 'poke', 'porch', 'prank', 'preach', 'provoke', 'raccoon', 'recess', 'repatriate', 'scruple', 'sentiment', 'slant', 'sneak', 'sovereign', 'specimen', 'speculate', 'sting', 'stutter', 'subpoena', 'tuck'
    ];
    var DEFINITIONS = [
        '保释', '宴会', '遗赠', '臭小子', '烤', '直率', '残疾人', '神志不清', '车站', '糖尿病', '独裁', '使者', '犹豫', '门厅', '家谱', '姜', '福音', '呻吟', '争吵', '内出血', '躬身', '傻瓜', '沉溺\n纵容', '步兵', '低等的', '立刻', '渎职', '忧郁', '膜', '垄断\n独有', '抵押', '猛攻', '排', '戳\n露出\n(~around)闲逛', '门廊', '恶作剧', '布道', '挑衅\n引起', '浣熊', '休庭\n深处', '遣返', '道德良知', '观点\n感情', '倾斜的', '偷偷的', '统治权', '样本', '猜测', '刺\n使疼痛', '口吃', '传票', '塞入'
    ];
} else if (['1', '2', '3', '5', '7', '8', '9', '11', '12', '13', '14', '15', '18', '19'].indexOf(params.id) >= 0) {
    var WORDS = [
        'bail', 'banquet', 'bequeath', 'brat', 'broil', 'impervious', 'cripple', 'zealotry', 'depot', 'diabetes', 'dictatorship', 'vandalize', 'falter', 'vacant', 'kennel', 'ginger', 'gospel', 'groan', 'hassle', 'gourmet', 'instinct', 'imbecile', 'indulge', 'infantry', 'inferior', 'trophy', 'conglomerate', 'feint', 'repugnant', 'monopoly', 'mortgage', 'onslaught', 'platoon', 'poke', 'porch', 'prank', 'preach', 'provoke', 'raccoon', 'recess', 'repatriate', 'scruple', 'sentiment', 'slant', 'sneak', 'sovereign', 'specimen', 'speculate', 'sting', 'stutter', 'subpoena', 'tuck'
    ];
    var DEFINITIONS = [
        '保释', '宴会', '遗赠', '臭小子', '烤', '不受影响的\n不能透过的', '残疾人', '狂热行为', '车站', '糖尿病', '独裁', '故意破坏', '犹豫', '空的', '狗舍', '姜', '福音', '呻吟', '争吵', '美食家', '本能', '傻瓜', '沉溺\n纵容', '步兵', '低等的', '奖品', '企业集团', '佯攻', '令人厌恶的', '垄断\n独有', '抵押', '猛攻', '排', '戳\n露出\n(~around)闲逛', '门廊', '恶作剧', '布道', '挑衅\n引起', '浣熊', '休庭\n深处', '遣返', '道德良知', '观点\n感情', '倾斜的', '偷偷的', '统治权', '样本', '猜测', '刺\n使疼痛', '口吃', '传票', '塞入'
    ];
} else {
    var WORDS = ['acquiesce', 'aesthetic', 'affidavit', 'allege', 'allegiance', 'aloft', 'anagram', 'anguish', 'apron', 'armada', 'arson', 'asthma', 'atrocity', 'axiom', 'badge', 'bandit', 'barbarous', 'baton', 'battalion', 'beacon', 'blasphemy', 'blunder', 'breach', 'bruise', 'canine', 'carnage', 'clam', 'confiscate', 'conspiracy', 'convene', 'custody', 'decree', 'defiance', 'dossier', 'dungeon', 'errand', 'extort', 'farce', 'gardenia', 'gentry', 'gimmick', 'goblet', 'grovel', 'hallucination', 'heinous', 'heirloom', 'hideous', 'holster', 'imbue', 'indictment', 'infant', 'infiltrate', 'inhale', 'interrogate', 'jurisdiction', 'lament', 'lethal', 'martyr', 'menace', 'narcotic', 'nausea', 'occult', 'pagan', 'persecute', 'portfolio', 'prophecy', 'prosecute', 'quarantine', 'quartet', 'rally', 'rampage', 'reckless', 'remorse', 'rendezvous', 'ridge', 'sapphire', 'sarcasm', 'sermon', 'stamina', 'stroll', 'suffocate', 'tenant', 'torment', 'treacherous', 'trinket', 'ulcer', 'vengeance', 'venom'];
    var DEFINITIONS = WORDS;
    TASKS[0] = '0020000312100100020031000000320102000203303201030002022330001130000022100101010000300300';
    // TASKS[6] = '';
    TASKS[16] = '3000023000002021002000121233003030113000020010103200000002130000021100003000000230021013';
    // TASKS[17] = '';
    // TODO: expand TASKS[20]
}

function Test(type, text, task, pid) {
    this.type = type;   // For learning: 0 is standard, 1 is movie. For testing: 0 is en -> ch, 1 is ch -> en
    this.text = text;
    this.task = task;
    this.events = [];
    if (task == 'learn') {
        if (type) {
            this.url = 'http://166.111.139.15:8003/votube/?pid=' + pid + '&word=' + text[0];
            // this.url = 'http://localhost:8000/votube/?word=' + text[0];
        } else {
            // this.url = (text[0] === 'nape') ?
            //     'http://pi.cs.tsinghua.edu.cn/lab/moviedict/study/nape.html' :
            //     'http://cn.bing.com/dict/clientsearch?q=' + text[0];
            this.url = 'http://166.111.139.15:8002/proxy/?youdao=&url=http://dict.youdao.com/w/' + text[0];
        }
    } else {
        this.element = $('<tr>');
        this.element.append($('<td>').append($('<label>').html(text[type].replace('\n', '<br>'))));
        this.element.append($('<td>').append($('<textarea rows="5" cols="32" spellcheck="false"></textarea>')));
        if (type)
            this.element.find('textarea').attr('placeholder', (task == 'pretest')?
                '尽可能写出多个你会的词\n一行一个词\n不会请留空' :
                '写出实验中学到的精确含义的1个单词\n回忆不起请留空，不要猜测'
            );
        else
            this.element.find('textarea').attr('placeholder', (task == 'pretest')?
                '尽可能回想词意\n对于多义词请列出尽可能多个含义\n一行写一个意思' :
                '对于多义词列出实验中学到的多个含义\n一行写一个意思\n回忆不起请留空'
            );
    }
}
Test.prototype.start = function(index) {
    $('span.cur').text(index + 1);
    if (this.task == 'learn') {
        $('div.surveydescription').show();
        $('label.word').text(this.text[0]);
        $('label.hint').text(this.text[1]).hide();
        $('iframe').attr('src', this.url);
        // show 3s blank
        var othis = this;
        setTimeout(function() {
            $('div.surveydescription').hide();
            othis.beginTime = Date.now();
        }, 5000);
    } else {
        this.element.show();
        this.element.find('textarea').focus();
        this.beginTime = Date.now();
    }
};
Test.prototype.stop = function() {
    this.endTime = Date.now();

    if (this.task == 'learn') {
        $('iframe').attr('src', '');
        $('label.word').text('');
        $('label.hint').text('');
    } else {
        this.element.hide();
    }
};
Test.prototype.validate = function() {
    var r = this.element.find('textarea').val();
    if (!(r.trim()))
        r = 0;
    else if (r.toLowerCase() === this.text[1 - this.type].toLowerCase())
        r = 1;
    return r;
};

function getTests(task) {
    var url = window.location.href,
        params = deparam(url.substring(url.indexOf('?') + 1)),
        words = params.words;
    if (words.length != WORDS.length || !params.id || params.id.length != (words.match(/[^0]/g) || []).length) {
        alert('invalid parameters: ' + JSON.stringify(params) + '\n试验结果将不会被保存，如果继续后果自负！\n请与主试联系。');
        return;
    }
    var ids = $.map(params.id.split(''), function(n, index) { return Number(n); }),
        en = $.map(words.split(''), function(v, i) { if (v > 0) return WORDS[Number(i)]; }),
        ch = $.map(words.split(''), function(v, i) { if (v > 0) return DEFINITIONS[Number(i)]; });

    if (task == 'learn' || task == 'pretest')
        return $.map(Array(ids.length), function(none, index) { return new Test(ids[index], [en[index], ch[index]], task, params.pid); });
    else {
        var r = [];
        for (var index = 0; index < ids.length; index++) {
            if (ids[index])
                r.push($.map(ch[index].split('\n'), function(chi, none) { return new Test(ids[index], [en[index], chi], task); }));
            else
                r.push([new Test(ids[index], [en[index], ch[index]], task)]);
        }
        return r;
    }
}


/**
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */
shortcut = {
    'all_shortcuts':{},//All the shortcuts are stored in this array
    'add': function(shortcut_combination,callback,opt) {
        //Provide a set of default options
        var default_options = {
            'type':'keydown',
            'propagate':false,
            'disable_in_input':false,
            'target':document,
            'keycode':false
        }
        if(!opt) opt = default_options;
        else {
            for(var dfo in default_options) {
                if(typeof opt[dfo] == 'undefined') opt[dfo] = default_options[dfo];
            }
        }

        var ele = opt.target;
        if(typeof opt.target == 'string') ele = document.getElementById(opt.target);
        var ths = this;
        shortcut_combination = shortcut_combination.toLowerCase();

        //The function to be called at keypress
        var func = function(e) {
            e = e || window.event;

            if(opt['disable_in_input']) { //Don't enable shortcut keys in Input, Textarea fields
                var element;
                if(e.target) element=e.target;
                else if(e.srcElement) element=e.srcElement;
                if(element.nodeType==3) element=element.parentNode;

                if(element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') return;
            }

            //Find Which key is pressed
            if (e.keyCode) code = e.keyCode;
            else if (e.which) code = e.which;
            var character = String.fromCharCode(code).toLowerCase();

            if(code == 188) character=","; //If the user presses , when the type is onkeydown
            if(code == 190) character="."; //If the user presses , when the type is onkeydown

            var keys = shortcut_combination.split("+");
            //Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
            var kp = 0;

            //Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
            var shift_nums = {
                "`":"~",
                "1":"!",
                "2":"@",
                "3":"#",
                "4":"$",
                "5":"%",
                "6":"^",
                "7":"&",
                "8":"*",
                "9":"(",
                "0":")",
                "-":"_",
                "=":"+",
                ";":":",
                "'":"\"",
                ",":"<",
                ".":">",
                "/":"?",
                "\\":"|"
            }
            //Special Keys - and their codes
            var special_keys = {
                'esc':27,
                'escape':27,
                'tab':9,
                'space':32,
                'return':13,
                'enter':13,
                'backspace':8,

                'scrolllock':145,
                'scroll_lock':145,
                'scroll':145,
                'capslock':20,
                'caps_lock':20,
                'caps':20,
                'numlock':144,
                'num_lock':144,
                'num':144,

                'pause':19,
                'break':19,

                'insert':45,
                'home':36,
                'delete':46,
                'end':35,

                'pageup':33,
                'page_up':33,
                'pu':33,

                'pagedown':34,
                'page_down':34,
                'pd':34,

                'left':37,
                'up':38,
                'right':39,
                'down':40,

                'f1':112,
                'f2':113,
                'f3':114,
                'f4':115,
                'f5':116,
                'f6':117,
                'f7':118,
                'f8':119,
                'f9':120,
                'f10':121,
                'f11':122,
                'f12':123
            }

            var modifiers = {
                shift: { wanted:false, pressed:false},
                ctrl : { wanted:false, pressed:false},
                alt  : { wanted:false, pressed:false},
                meta : { wanted:false, pressed:false}   //Meta is Mac specific
            };

            if(e.ctrlKey)   modifiers.ctrl.pressed = true;
            if(e.shiftKey)  modifiers.shift.pressed = true;
            if(e.altKey)    modifiers.alt.pressed = true;
            if(e.metaKey)   modifiers.meta.pressed = true;

            for(var i=0; k=keys[i],i<keys.length; i++) {
                //Modifiers
                if(k == 'ctrl' || k == 'control') {
                    kp++;
                    modifiers.ctrl.wanted = true;

                } else if(k == 'shift') {
                    kp++;
                    modifiers.shift.wanted = true;

                } else if(k == 'alt') {
                    kp++;
                    modifiers.alt.wanted = true;
                } else if(k == 'meta') {
                    kp++;
                    modifiers.meta.wanted = true;
                } else if(k.length > 1) { //If it is a special key
                    if(special_keys[k] == code) kp++;

                } else if(opt['keycode']) {
                    if(opt['keycode'] == code) kp++;

                } else { //The special keys did not match
                    if(character == k) kp++;
                    else {
                        if(shift_nums[character] && e.shiftKey) { //Stupid Shift key bug created by using lowercase
                            character = shift_nums[character];
                            if(character == k) kp++;
                        }
                    }
                }
            }

            if(kp == keys.length &&
                        modifiers.ctrl.pressed == modifiers.ctrl.wanted &&
                        modifiers.shift.pressed == modifiers.shift.wanted &&
                        modifiers.alt.pressed == modifiers.alt.wanted &&
                        modifiers.meta.pressed == modifiers.meta.wanted) {
                callback(e);

                if(!opt['propagate']) { //Stop the event
                    //e.cancelBubble is supported by IE - this will kill the bubbling process.
                    e.cancelBubble = true;
                    e.returnValue = false;

                    //e.stopPropagation works in Firefox.
                    if (e.stopPropagation) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    return false;
                }
            }
        }
        this.all_shortcuts[shortcut_combination] = {
            'callback':func,
            'target':ele,
            'event': opt['type']
        };
        //Attach the function with the event
        if(ele.addEventListener) ele.addEventListener(opt['type'], func, false);
        else if(ele.attachEvent) ele.attachEvent('on'+opt['type'], func);
        else ele['on'+opt['type']] = func;
    },

    //Remove the shortcut - just specify the shortcut and I will remove the binding
    'remove':function(shortcut_combination) {
        shortcut_combination = shortcut_combination.toLowerCase();
        var binding = this.all_shortcuts[shortcut_combination];
        delete(this.all_shortcuts[shortcut_combination])
        if(!binding) return;
        var type = binding['event'];
        var ele = binding['target'];
        var callback = binding['callback'];

        if(ele.detachEvent) ele.detachEvent('on'+type, callback);
        else if(ele.removeEventListener) ele.removeEventListener(type, callback, false);
        else ele['on'+type] = false;
    }
}
