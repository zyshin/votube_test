var LIDS = ['000001011111', '000101010111', '010101010101', '110101010100', '111101010000', '111111000000', '111110100000', '111010101000', '101010101010', '001010101011', '000010101111', '000000111111', '101010101010', '000010101111', '111111000000', '110101010100', '000001011111', '001010101011', '000000111111', '111110100000', '010101010101', '111010101000', '111101010000', '000101010111'];
// var TIDS = ['001010101011', '000010101111', '000000111111', '000001011111', '000101010111', '010101010101', '110101010100', '111101010000', '111111000000', '111110100000', '111010101000', '101010101010', '000000111111', '000101010111', '101010101010', '111110100000', '110101010100', '000001011111', '010101010101', '001010101011', '111111000000', '000010101111', '111010101000', '111101010000'];
var TIDS = ['000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000', '000000000000'];
var TASKS = ['3122001302033210010201333033223012002111330201200121', '000001011111222222333333333333222222111111'];
var WORDS = [
    'bail', 'banquet', 'bequeath', 'brat', 'broil', 'candid', 'cripple', 'delirium', 'depot', 'diabetes', 'dictatorship', 'emissary', 'falter', 'foyer', 'genealogy', 'ginger', 'gospel', 'groan', 'hassle', 'hemorrhage', 'hunch', 'imbecile', 'indulge', 'infantry', 'inferior', 'instantaneous', 'malfeasance', 'melancholy', 'membrane', 'monopoly', 'mortgage', 'onslaught', 'platoon', 'poke', 'porch', 'prank', 'preach', 'provoke', 'raccoon', 'recess', 'repatriate', 'scruple', 'sentiment', 'slant', 'sneak', 'sovereign', 'specimen', 'speculate', 'sting', 'stutter', 'subpoena', 'tuck'
    // 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon', 'raccoon', 'platoon'
];
var DEFINITIONS = [
    // '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'
    '保释', '宴会', '遗赠', '臭小子', '烤；烤肉', '直率；坦诚', '残疾人；致残', '神志不清；精神错乱', '车站；仓库', '糖尿病', '独裁；专政', '使者', '犹豫', '门厅', '家谱', '姜', '福音', '呻吟；叹气', '争吵；烦扰', '内出血', '预感', '傻瓜', '沉溺\n纵容', '步兵', '低等的', '立刻', '渎职', '忧郁的；忧郁症', '膜', '垄断\n独有', '抵押；贷款', '猛攻', '排', '戳\n露出\n(~around)闲逛', '门廊；走廊', '恶作剧', '布道；宣扬；说教', '挑衅\n引起', '浣熊', '休庭\n深处', '遣返', '道德良知；顾忌', '观点\n感情', '倾斜的', '偷偷的', '统治权；统治者', '样本', '猜测；推测\n做投机买卖', '刺\n使疼痛', '口吃', '传票；传唤', '塞入；夹入'
];

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
