var LIDS = ['000001011111', '000101010111', '010101010101', '110101010100', '111101010000', '111111000000', '111110100000', '111010101000', '101010101010', '001010101011', '000010101111', '000000111111'];
var TIDS = ['001010101011', '000010101111', '000000111111', '000001011111', '000101010111', '010101010101', '110101010100', '111101010000', '111111000000', '111110100000', '111010101000', '101010101010'];
var WORDS = [
    'negro', 'desegregate', 'sergeant', 'crooked', 'cripple', 'cunning', 'appliance', 'gospel', 'luscious', 'imbecile', 'platoon', 'dictatorship', 'sneak', 'spook', 'hassle', 'titanium', 'nape', 'jabber', 'beatnik', 'stinging', 'onslaught', 'tuck', 'broil', 'autograph', 'stew', 'saute', 'candid', 'raccoon', 'escalation', 'a crock of', 'vet', 'ambush', 'retread', 'porch', 'gimp', 'panther'
];
var DEFINITIONS = [
    '黑人；黑人的', '废止种族隔离', '军士；中士', '弯曲的；扭曲的', '跛子；残废的人', '狡猾的；伶俐的', '（家用）电器；器具', '（圣经）福音', '（人）肉感的；多汁的', '低能；弱智；废柴', '（军队的）排', '独裁；专政', '偷偷溜；偷偷地做', '鬼；幽灵（同ghost）', '争执；争吵', '钛（金属元素）', '用凝固汽油弹攻击', '叽里咕噜地说；BB', '奇装异服言行乖僻的人；“垮了的一代”', '激烈的；刺人的', '猛攻；突击', '...in    把…塞进；藏入', '烤；炙（肉等）', '亲笔签名', '炖菜', '炒；炒菜', '坦白的（说）；直言不讳的', '浣熊', '(战争)逐步升级；扩大', '一坛子的；一堆（废话）', '兽医', '埋伏；伏击', '翻新修补（轮胎）', '门廊；门厅', '瘸子', '黑豹；美洲豹',
];

function browserCheck() {
    var isChromium = window.chrome,
        isGoogle = window.navigator.vendor === "Google Inc.",
        isOpera = window.navigator.userAgent.indexOf("OPR") > -1,
        isIEedge = window.navigator.userAgent.indexOf("Edge") > -1,
        isWindows = window.navigator.userAgent.indexOf("Win") > -1;
    if(isChromium && isGoogle && !isOpera && !isIEedge && isWindows) {
       // is Google chrome
    } else { 
       // not Google chrome
       alert('Please use Chrome on Windows to view this page.');
       $('body').remove();
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

function Test(type, text, learn) {
    this.type = type;   // For learning: 0 is standard, 1 is movie. For testing: 0 is en -> ch, 1 is ch -> en
    this.text = text;
    this.learn = learn;
    this.events = [];
    if (learn) {
        if (type) {
            this.url = 'http://166.111.139.15:8003/votube/?word=' + text[0];
            // this.url = 'http://localhost:8000/votube/?word=' + text[0];
        } else {
            this.url = (text[0] === 'nape') ?
                'http://pi.cs.tsinghua.edu.cn/lab/moviedict/study/nape.html' : 
                'http://cn.bing.com/dict/clientsearch?q=' + text[0];
        }
    } else {
        this.element = $('<tr>');
        this.element.append('<td>').append($('<label>').html(text[type]));
        this.element.append('<td>').append($('<input type="text">'));
    }
}
Test.prototype.start = function(index) {
    this.beginTime = Date.now();
    $('span.cur').text(index + 1);
    $('div.surveydescription').hide();
    
    if (this.learn) {
        $('label.word').text(this.text[0]);
        $('label.hint').text(this.text[1]).hide();
        $('iframe').attr('src', this.url);
    } else {
        this.element.show();
        this.element.find('input').focus();
    }
};
Test.prototype.stop = function() {
    this.endTime = Date.now();

    if (this.learn) {
        $('iframe').attr('src', '');
        $('label.word').text('');
        $('label.hint').text('');
    } else {
        this.element.hide();
    }    
};
Test.prototype.validate = function() {
    var r = this.element.find('input').val();
    if (!r)
        r = 0;
    else if (r.toLowerCase() === this.text[1 - this.type].toLowerCase())
        r = 1;
    return r;
};

function getTests(learn) {
    var url = window.location.href,
        params = deparam(url.substring(url.indexOf('?') + 1)),
        start = Number(params.start || 0),
        end = Number(params.end || 36);
    if (start < 0 || start >= WORDS.length || end <= 0 || end > WORDS.length || !params.id || params.id.length != end - start) {
        alert('invalid parameters: ' + JSON.stringify(params) + '\n试验结果将不会被保存，如果继续后果自负！\n请与主试联系。');
        return;
    }
    var ids = $.map(params.id.split(''), function(n, index) { return Number(n); }),
        en = WORDS.slice(start, end),
        ch = DEFINITIONS.slice(start, end);

    return $.map(Array(ids.length), function(none, index) { return new Test(ids[index], [en[index], ch[index]], learn); });
}
