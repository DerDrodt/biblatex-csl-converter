!function(){"use strict";var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};var t=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e};var a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e},o=[[/\\/g,"\\textbackslash "],[/\{/g,"\\{ "],[/\}/g,"\\} "],[/&/g,"{\\&}"],[/%/g,"{\\%}"],[/\$/g,"{\\$}"],[/#/g,"{\\#}"],[/_/g,"{\\_}"],[/~/g,"{\\textasciitilde}"],[/\^/g,"{\\textasciicircum}"],[/ and /g," {and} "]],n=["catalan","croatian","czech","danish","dutch","english","american","finnish","french","german","greek","italian","latin","norwegian","polish","portuguese","brazilian","russian","slovene","spanish","swedish"],l={abstract:{type:"f_long_literal",biblatex:"abstract",csl:"abstract"},addendum:{type:"f_literal",biblatex:"addendum"},afterword:{type:"l_name",biblatex:"afterword"},annotation:{type:"f_long_literal",biblatex:"annotation"},annotator:{type:"l_name",biblatex:"annotator"},author:{type:"l_name",biblatex:"author",csl:"author"},bookauthor:{type:"l_name",biblatex:"bookauthor",csl:"container-author"},bookpagination:{type:"f_key",biblatex:"bookpagination",options:["page","column","section","paragraph","verse","line"]},booksubtitle:{type:"f_title",biblatex:"booksubtitle"},booktitle:{type:"f_title",biblatex:"booktitle",csl:"container-title"},booktitleaddon:{type:"f_title",biblatex:"booktitleaddon"},chapter:{type:"f_literal",biblatex:"chapter",csl:"chapter-number"},commentator:{type:"l_name",biblatex:"commentator"},date:{type:"f_date",biblatex:"date",csl:"issued"},doi:{type:"f_verbatim",biblatex:"doi",csl:"DOI"},edition:{type:"f_integer",biblatex:"edition",csl:"edition"},editor:{type:"l_name",biblatex:"editor",csl:"editor"},editora:{type:"l_name",biblatex:"editora"},editorb:{type:"l_name",biblatex:"editorb"},editorc:{type:"l_name",biblatex:"editorc"},editortype:{type:"f_key",biblatex:"editortype",options:["editor","compiler","founder","continuator","redactor","reviser","collaborator"]},editoratype:{type:"f_key",biblatex:"editoratype",options:["editor","compiler","founder","continuator","redactor","reviser","collaborator"]},editorbtype:{type:"f_key",biblatex:"editorbtype",options:["editor","compiler","founder","continuator","redactor","reviser","collaborator"]},editorctype:{type:"f_key",biblatex:"editorctype",options:["editor","compiler","founder","continuator","redactor","reviser","collaborator"]},eid:{type:"f_literal",biblatex:"eid"},entrysubtype:{type:"f_literal",biblatex:"entrysubtype"},eprint:{type:"f_verbatim",biblatex:"eprint"},eprintclass:{type:"f_literal",biblatex:"eprintclass"},eprinttype:{type:"f_literal",biblatex:"eprinttype"},eventdate:{type:"f_date",biblatex:"eventdate",csl:"event-date"},eventtitle:{type:"f_title",biblatex:"eventtitle",csl:"event"},file:{type:"f_verbatim",biblatex:"file"},foreword:{type:"l_name",biblatex:"foreword"},holder:{type:"l_name",biblatex:"holder"},howpublished:{type:"f_literal",biblatex:"howpublished",csl:"medium"},indextitle:{type:"f_literal",biblatex:"indextitle"},institution:{type:"l_literal",biblatex:"institution"},introduction:{type:"l_name",biblatex:"introduction"},isan:{type:"f_literal",biblatex:"isan",csl:"number"},isbn:{type:"f_literal",biblatex:"isbn",csl:"ISBN"},ismn:{type:"f_literal",biblatex:"ismn",csl:"number"},isrn:{type:"f_literal",biblatex:"isrn",csl:"number"},issn:{type:"f_literal",biblatex:"issn",csl:"ISSN"},issue:{type:"f_literal",biblatex:"issue",csl:"issue"},issuesubtitle:{type:"f_literal",biblatex:"issuesubtitle"},issuetitle:{type:"f_literal",biblatex:"issuetitle"},iswc:{type:"f_literal",biblatex:"iswc",csl:"number"},journalsubtitle:{type:"f_literal",biblatex:"journalsubtitle"},journaltitle:{type:"f_literal",biblatex:"journaltitle",csl:"container-title"},keywords:{type:"l_tag",biblatex:"keywords"},label:{type:"f_literal",biblatex:"label"},language:{type:"l_key",biblatex:"language",options:n},langid:{type:"f_key",strict:!0,biblatex:"langid",csl:"language",options:{acadian:{csl:"fr-CA",biblatex:"acadian"},afrikaans:{csl:"af-ZA",biblatex:"afrikaans"},arabic:{csl:"ar",biblatex:"arabic"},basque:{csl:"eu",biblatex:"basque"},bulgarian:{csl:"bg-BG",biblatex:"bulgarian"},catalan:{csl:"ca-AD",biblatex:"catalan"},chinese:{csl:"zh-CN",biblatex:"pinyin"},croatian:{csl:"hr-HR",biblatex:"croatian"},czech:{csl:"cs-CZ",biblatex:"czech"},danish:{csl:"da-DK",biblatex:"danish"},dutch:{csl:"nl-NL",biblatex:"dutch"},auenglish:{csl:"en-GB",biblatex:"australian"},caenglish:{csl:"en-US",biblatex:"canadian"},nzenglish:{csl:"en-GB",biblatex:"newzealand"},ukenglish:{csl:"en-GB",biblatex:"ukenglish"},usenglish:{csl:"en-US",biblatex:"usenglish"},estonian:{csl:"et-EE",biblatex:"estonian"},finnish:{csl:"fi-FI",biblatex:"finnish"},french:{csl:"fr-FR",biblatex:"french"},cafrench:{csl:"fr-CA",biblatex:"canadien"},german:{csl:"de-DE",biblatex:"ngerman"},atgerman:{csl:"de-AT",biblatex:"naustrian"},greek:{csl:"el-GR",biblatex:"greek"},hebrew:{csl:"he-IL",biblatex:"hebrew"},hungarian:{csl:"hu-HU",biblatex:"hungarian"},icelandic:{csl:"is-IS",biblatex:"icelandic"},italian:{csl:"it-IT",biblatex:"italian"},japanese:{csl:"ja-JP",biblatex:"japanese"},latin:{csl:"la",biblatex:"latin"},latvian:{csl:"lv-LV",biblatex:"latvian"},lithuanian:{csl:"lt-LT",biblatex:"lithuanian"},magyar:{csl:"hu-HU",biblatex:"magyar"},mongolian:{csl:"mn-MN",biblatex:"mongolian"},norwegian:{csl:"nb-NO",biblatex:"norsk"},newnorwegian:{csl:"nn-NO",biblatex:"nynorsk"},farsi:{csl:"fa-IR",biblatex:"farsi"},polish:{csl:"pl-PL",biblatex:"polish"},portuguese:{csl:"pt-PT",biblatex:"portuguese"},brportuguese:{csl:"pt-BR",biblatex:"brazilian"},romanian:{csl:"ro-RO",biblatex:"romanian"},russian:{csl:"ru-RU",biblatex:"russian"},serbian:{csl:"sr-RS",biblatex:"serbian"},cyrillicserbian:{csl:"sr-RS",biblatex:"serbianc"},slovak:{csl:"sk-SK",biblatex:"slovak"},slovene:{csl:"sl-SL",biblatex:"slovene"},spanish:{csl:"es-ES",biblatex:"spanish"},swedish:{csl:"sv-SE",biblatex:"swedish"},thai:{csl:"th-TH",biblatex:"thai"},turkish:{csl:"tr-TR",biblatex:"turkish"},ukrainian:{csl:"uk-UA",biblatex:"ukrainian"},vietnamese:{csl:"vi-VN",biblatex:"vietnamese"}}},library:{type:"f_literal",biblatex:"library"},location:{type:"l_literal",biblatex:"location",csl:"publisher-place"},mainsubtitle:{type:"f_title",biblatex:"mainsubtitle"},maintitle:{type:"f_title",biblatex:"maintitle"},maintitleaddon:{type:"f_title",biblatex:"maintitleaddon"},nameaddon:{type:"f_literal",biblatex:"nameaddon"},note:{type:"f_literal",biblatex:"note",csl:"note"},number:{type:"f_literal",biblatex:"number",csl:{"article-journal":"issue",patent:"number","*":"collection-number"}},organization:{type:"l_literal",biblatex:"organization"},origdate:{type:"f_date",biblatex:"origdate",csl:"original-date"},origlanguage:{type:"f_key",biblatex:"origlanguage",options:n},origlocation:{type:"l_literal",biblatex:"origlocation",csl:"original-publisher-place"},origpublisher:{type:"l_literal",biblatex:"origpublisher",csl:"original-publisher"},origtitle:{type:"f_title",biblatex:"origtitle",csl:"original-title"},pages:{type:"l_range",biblatex:"pages",csl:"page"},pagetotal:{type:"f_literal",biblatex:"pagetotal",csl:"number-of-pages"},pagination:{type:"f_key",biblatex:"pagination",options:["page","column","section","paragraph","verse","line"]},part:{type:"f_literal",biblatex:"part"},publisher:{type:"l_literal",biblatex:"publisher",csl:"publisher"},pubstate:{type:"f_key",biblatex:"pubstate",csl:"status",options:{inpreparation:{csl:"in preparation",biblatex:"inpreparation"},submitted:{csl:"submitted",biblatex:"submitted"},forthcoming:{csl:"forthcoming",biblatex:"forthcoming"},inpress:{csl:"in press",biblatex:"inpress"},prepublished:{csl:"prepublished",biblatex:"prepublished"}}},reprinttitle:{type:"f_literal",biblatex:"reprinttitle"},series:{type:"f_literal",biblatex:"series",csl:"collection-title"},shortauthor:{type:"l_name",biblatex:"shortauthor"},shorteditor:{type:"l_name",biblatex:"shorteditor"},shorthand:{type:"f_literal",biblatex:"shorthand"},shorthandintro:{type:"f_literal",biblatex:"shorthandintro"},shortjournal:{type:"f_literal",biblatex:"shortjournal",csl:"container-title-short"},shortseries:{type:"f_literal",biblatex:"shortseries"},shorttitle:{type:"f_literal",biblatex:"shorttitle",csl:"title-short"},subtitle:{type:"f_title",biblatex:"subtitle"},title:{type:"f_title",biblatex:"title",csl:"title"},titleaddon:{type:"f_title",biblatex:"titleaddon"},translator:{type:"l_name",biblatex:"translator",csl:"translator"},type:{type:"f_key",biblatex:"type",options:["manual","patent","report","thesis","mathesis","phdthesis","candthesis","techreport","resreport","software","datacd","audiocd"]},url:{type:"f_uri",biblatex:"url",csl:"URL"},urldate:{type:"f_date",biblatex:"urldate",csl:"accessed"},venue:{type:"f_literal",biblatex:"venue",csl:"event-place"},version:{type:"f_literal",biblatex:"version",csl:"version"},volume:{type:"f_literal",biblatex:"volume",csl:"volume"},volumes:{type:"f_literal",biblatex:"volumes",csl:"number-of-volumes"}},s={"article-journal":{order:1,biblatex:"article",csl:"article-journal",required:["journaltitle","title","author","date"],eitheror:[],optional:["abstract","addendum","annotator","commentator","doi","editor","editora","editorb","editorc","eid","eprint","eprintclass","eprinttype","issn","issue","issuesubtitle","issuetitle","journalsubtitle","language","langid","note","number","origlanguage","pages","pagination","pubstate","series","subtitle","titleaddon","translator","url","urldate","version","volume","annotation","keywords"]},"article-magazine":{order:2,biblatex:"article","biblatex-subtype":"magazine",csl:"article-magazine",required:["journaltitle","title","author","date"],eitheror:[],optional:["abstract","addendum","annotator","commentator","doi","editor","editora","editorb","editorc","eid","eprint","eprintclass","eprinttype","issn","issue","issuesubtitle","issuetitle","journalsubtitle","language","langid","note","number","origlanguage","pages","pagination","pubstate","series","subtitle","titleaddon","translator","url","urldate","version","volume","annotation","keywords"]},"article-newspaper":{order:3,biblatex:"article","biblatex-subtype":"newspaper",csl:"article-newspaper",required:["journaltitle","title","author","date"],eitheror:[],optional:["abstract","addendum","annotator","commentator","doi","editor","editora","editorb","editorc","eid","eprint","eprintclass","eprinttype","issn","issue","issuesubtitle","issuetitle","journalsubtitle","language","langid","note","number","origlanguage","pages","pagination","pubstate","series","subtitle","titleaddon","translator","url","urldate","version","volume","annotation","keywords"]},article:{order:4,biblatex:"article",csl:"article",required:["journaltitle","title","author","date"],eitheror:[],optional:["abstract","addendum","annotator","commentator","doi","editor","editora","editorb","editorc","eid","eprint","eprintclass","eprinttype","issn","issue","issuesubtitle","issuetitle","journalsubtitle","language","langid","note","number","origlanguage","pages","pagination","pubstate","series","subtitle","titleaddon","translator","url","urldate","version","volume","annotation","keywords"]},"post-weblog":{order:5,biblatex:"online",csl:"post-weblog",required:["date","title","url"],eitheror:["editor","author"],optional:["abstract","addendum","pubstate","subtitle","language","langid","urldate","titleaddon","version","note","organization","annotation","keywords"]},book:{order:10,biblatex:"book",csl:"book",required:["title","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","chapter","commentator","doi","edition","editor","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","pagetotal","bookpagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},mvbook:{order:11,biblatex:"mvbook",csl:"book",required:["title","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","commentator","doi","edition","editor","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","note","number","origlanguage","pagetotal","bookpagination","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volumes","annotation","keywords"]},inbook:{order:12,biblatex:"inbook",csl:"chapter",required:["title","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","bookauthor","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editor","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},bookinbook:{order:13,biblatex:"bookinbook",csl:"chapter",required:["title","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","bookauthor","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editor","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},suppbook:{order:14,biblatex:"suppbook",csl:"chapter",required:["title","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","bookauthor","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editor","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},booklet:{order:15,biblatex:"booklet",csl:"pamphlet",required:["title","date"],eitheror:["editor","author"],optional:["abstract","titleaddon","addendum","pages","pagination","howpublished","type","pubstate","chapter","doi","subtitle","language","langid","location","url","urldate","pagetotal","bookpagination","note","eprint","eprintclass","eprinttype","annotation","keywords"]},collection:{order:20,biblatex:"collection",csl:"dataset",required:["editor","title","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","chapter","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","pagetotal","bookpagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},mvcollection:{order:21,biblatex:"mvcollection",csl:"dataset",required:["editor","title","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","note","number","origlanguage","pagetotal","bookpagination","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volumes","annotation","keywords"]},incollection:{order:22,biblatex:"incollection",csl:"entry",required:["title","editor","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},suppcollection:{order:23,biblatex:"suppcollection",csl:"entry",required:["title","editor","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},post:{order:30,biblatex:"online",csl:"post",required:["date","title","url"],eitheror:["editor","author"],optional:["abstract","addendum","pubstate","subtitle","language","langid","urldate","titleaddon","version","note","organization","annotation","keywords"]},manual:{order:40,biblatex:"manual",csl:"book",required:["title","date"],eitheror:["editor","author"],optional:["abstract","addendum","chapter","doi","edition","eprint","eprintclass","eprinttype","isbn","language","langid","location","note","number","organization","pages","pagination","pagetotal","bookpagination","publisher","pubstate","series","subtitle","titleaddon","type","url","urldate","version","annotation","keywords"]},misc:{order:41,biblatex:"misc",csl:"entry",required:["title","date"],eitheror:["editor","author"],optional:["abstract","addendum","howpublished","type","pubstate","organization","doi","subtitle","language","langid","location","url","urldate","titleaddon","version","note","eprint","eprintclass","eprinttype","annotation","keywords"]},online:{order:42,biblatex:"online",csl:"webpage",required:["date","title","url"],eitheror:["editor","author"],optional:["abstract","addendum","pubstate","subtitle","language","langid","urldate","titleaddon","version","note","organization","annotation","keywords"]},patent:{order:43,biblatex:"patent",csl:"patent",required:["title","number","author","date"],eitheror:[],optional:["abstract","addendum","holder","location","pubstate","doi","subtitle","titleaddon","type","url","urldate","version","note","eprint","eprintclass","eprinttype","annotation","keywords"]},periodical:{order:50,biblatex:"periodical",csl:"book",required:["editor","title","date"],eitheror:[],optional:["abstract","addendum","volume","pubstate","number","series","issn","issue","issuesubtitle","issuetitle","doi","subtitle","editora","editorb","editorc","url","urldate","language","langid","note","eprint","eprintclass","eprinttype","annotation","keywords"]},suppperiodical:{order:51,biblatex:"suppperiodical",csl:"entry",required:["journaltitle","title","author","date"],eitheror:[],optional:["abstract","addendum","annotator","commentator","doi","editor","editora","editorb","editorc","eid","eprint","eprintclass","eprinttype","issn","issue","issuesubtitle","issuetitle","journalsubtitle","language","langid","note","number","origlanguage","pages","pagination","pubstate","series","subtitle","titleaddon","translator","url","urldate","version","volume","annotation","keywords"]},proceedings:{order:60,biblatex:"proceedings",csl:"entry",required:["editor","title","date"],eitheror:[],optional:["abstract","addendum","chapter","doi","eprint","eprintclass","eprinttype","eventdate","eventtitle","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","organization","pages","pagination","pagetotal","bookpagination","part","publisher","pubstate","series","subtitle","titleaddon","url","urldate","venue","volume","volumes","annotation","keywords"]},mvproceedings:{order:61,biblatex:"mvproceedings",csl:"entry",required:["editor","title","date"],eitheror:[],optional:["abstract","addendum","doi","eprint","eprintclass","eprinttype","eventdate","eventtitle","isbn","language","langid","location","note","number","organization","pagetotal","bookpagination","publisher","pubstate","series","subtitle","titleaddon","url","urldate","venue","volumes","annotation","keywords"]},inproceedings:{order:62,biblatex:"inproceedings",csl:"paper-conference",required:["title","editor","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","booksubtitle","booktitleaddon","chapter","doi","eprint","eprintclass","eprinttype","eventdate","eventtitle","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","organization","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","url","urldate","venue","volume","volumes","annotation","keywords"]},reference:{order:70,biblatex:"book",csl:"reference",required:["editor","title","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","chapter","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","pagetotal","bookpagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},mvreference:{order:71,biblatex:"mvreference",csl:"book",required:["editor","title","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","note","number","origlanguage","pagetotal","bookpagination","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volumes","annotation","keywords"]},inreference:{order:72,biblatex:"inreference",csl:"entry",required:["title","editor","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},"entry-encyclopedia":{order:73,biblatex:"inreference",csl:"entry-encyclopedia",required:["title","editor","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},"entry-dictionary":{order:74,biblatex:"inreference",csl:"entry-dictionary",required:["title","editor","booktitle","author","date"],eitheror:[],optional:["abstract","addendum","afterword","annotator","booksubtitle","booktitleaddon","chapter","commentator","doi","edition","editora","editorb","editorc","eprint","eprintclass","eprinttype","foreword","introduction","isbn","language","langid","location","mainsubtitle","maintitle","maintitleaddon","note","number","origlanguage","pages","pagination","part","publisher","pubstate","series","subtitle","titleaddon","translator","url","urldate","volume","volumes","annotation","keywords"]},report:{order:80,biblatex:"report",csl:"report",required:["author","title","type","institution","date"],eitheror:[],optional:["abstract","addendum","pages","pagination","pagetotal","bookpagination","pubstate","number","isrn","chapter","doi","subtitle","language","langid","location","url","urldate","titleaddon","version","note","eprint","eprintclass","eprinttype","annotation","keywords"]},thesis:{order:81,biblatex:"thesis",csl:"thesis",required:["author","title","type","institution","date"],eitheror:[],optional:["abstract","addendum","pages","pagination","pagetotal","bookpagination","pubstate","isbn","chapter","doi","subtitle","language","langid","location","url","urldate","titleaddon","note","eprint","eprintclass","eprinttype","annotation","keywords"]},unpublished:{order:90,biblatex:"unpublished",csl:"manuscript",required:["title","author","date"],eitheror:[],optional:["abstract","addendum","howpublished","pubstate","isbn","date","subtitle","language","langid","location","url","urldate","titleaddon","note","annotation","keywords"]}};function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var d={strong:{open:"\\mkbibbold{",close:"}",verbatim:!1},em:{open:"\\mkbibitalic{",close:"}",verbatim:!1},smallcaps:{open:"\\textsc{",close:"}",verbatim:!1},enquote:{open:"\\enquote{",close:"}",verbatim:!1},nocase:{open:"{{",close:"}}",verbatim:!1},sub:{open:"_{",close:"}",verbatim:!1},sup:{open:"^{",close:"}",verbatim:!1},math:{open:"$",close:"$",verbatim:!1},url:{open:"\\url{",close:"}",verbatim:!0}},u=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a(this,e),this.bibDB=t,this.pks=i||Object.keys(t),this.config=r,this.warnings=[],this.bibtexArray=[],this.bibtexStr=""}return r(e,[{key:"parse",value:function(){var e=this;return this.pks.forEach((function(a){var i=e.bibDB[a],r={type:s[i.bib_type].biblatex,key:i.entry_key.length?i.entry_key:"Undefined"},o={};s[i.bib_type]["biblatex-subtype"]&&(o.entrysubtype=s[i.bib_type]["biblatex-subtype"]);var n=e.config.exportUnexpectedFields?function(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?b(Object(i),!0).forEach((function(a){t(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},i.fields,{},i.unexpected_fields):i.fields,d=function(t){if(!l[t])return"continue";var a=n[t],i=l[t].type,r=l[t].biblatex;switch(i){case"f_date":o[r]=a;break;case"f_integer":o[r]=e._reformText(a);break;case"f_key":o[r]=e._reformKey(a,t);break;case"f_literal":case"f_long_literal":o[r]=e._reformText(a);break;case"l_range":o[r]=e._reformRange(a);break;case"f_title":o[r]=e._reformText(a);break;case"f_uri":case"f_verbatim":o[r]=a.replace(/{|}/g,"");break;case"l_key":o[r]=e._escapeTeX(a.map((function(a){return e._reformKey(a,t)})).join(" and "));break;case"l_literal":o[r]=a.map((function(t){return e._reformText(t)})).join(" and ");break;case"l_name":o[r]=e._reformName(a);break;case"l_tag":o[r]=e._escapeTeX(a.join(", "));break;default:console.warn("Unrecognized type: ".concat(i,"!"))}};for(var u in n)d(u);r.values=o,e.bibtexArray[e.bibtexArray.length]=r})),this.bibtexStr=this._getBibtexString(this.bibtexArray),this.bibtexStr}},{key:"_reformKey",value:function(e,t){if("string"==typeof e){var a=l[t];return Array.isArray(a.options)?this._escapeTeX(e):this._escapeTeX(a.options[e].biblatex)}return this._reformText(e)}},{key:"_reformRange",value:function(e){var t=this;return e.map((function(e){return e.map((function(e){return t._reformText(e)})).join("--")})).join(",")}},{key:"_reformName",value:function(e){var t=this,a=[];return e.forEach((function(e){if(e.literal){var i=t._reformText(e.literal);i.length&&a.push("{".concat(i,"}"))}else{var r=e.family?t._reformText(e.family):"",o=e.given?t._reformText(e.given):"",n=!!e.suffix&&t._reformText(e.suffix),l=!!e.prefix&&t._reformText(e.prefix),s=!!e.useprefix&&e.useprefix;if(t.config.traditionalNames)n&&l?a.push("{".concat(l," ").concat(r,"}, {").concat(n,"}, {").concat(o,"}")):n?a.push("{".concat(r,"}, {").concat(n,"}, {").concat(o,"}")):l?a.push("{".concat(l," ").concat(r,"}, {").concat(o,"}")):a.push("{".concat(r,"}, {").concat(o,"}"));else{var b=[];o.length&&b.push(t._protectNamePart("given={".concat(o,"}"))),r.length&&b.push(t._protectNamePart("family={".concat(r,"}"))),n&&b.push(t._protectNamePart("suffix={".concat(n,"}"))),l&&(b.push(t._protectNamePart("prefix={".concat(l,"}"))),b.push("useprefix=".concat(String(s)))),a.push(b.join(", "))}}})),a.join(" and ")}},{key:"_protectNamePart",value:function(e){return e.includes(",")?'"'.concat(e,'"'):e}},{key:"_escapeTeX",value:function(e){for(var t=o.length,a=0;a<t;a++)e=e.replace(o[a][0],o[a][1]);return e}},{key:"_reformText",value:function(e){var t=this,a="",i=[];return e.concat({type:"text",text:""}).forEach((function(e){if("variable"===e.type)return a+="} # ".concat(e.attrs.variable," # {"),void t.warnings.push({type:"undefined_variable",variable:e.attrs.variable});var r=[];if(e.marks){var o=!1;e.marks.forEach((function(e){"sup"!==e.type&&"sub"!==e.type||o?"nocase"===e.type?r.unshift(e.type):r.push(e.type):(r.push("math"),r.push(e.type),o=!0)}))}var n=!1,l=[];i.forEach((function(e,t){if(e!=r[t]&&(n=!0),n){var a=d[e].close;"nocase"!==i[0]&&"\\"===d[e].open[0]&&(a+="}"),l.push(a)}})),l.reverse(),a+=l.join("");var s=!1,b=!1;r.forEach((function(e,t){e!=i[t]&&(s=!0),s&&("nocase"!==r[0]&&"\\"===d[e].open[0]&&(a+="{"),a+=d[e].open,d[e].verbatim&&(b=!0))})),a+=b?e.text:t._escapeTeX(e.text),i=r})),a}},{key:"_getBibtexString",value:function(e){for(var t=e.length,a="",i=0;i<t;i++){0<i&&(a+="\n\n");var r=e[i];for(var o in a+="@".concat(r.type,"{").concat(r.key),r.values){var n="{".concat(r.values[o],"}").replace(/\{\} # /g,"").replace(/# \{\}/g,"");a+=",\n".concat(o," = ").concat(n)}a+="\n}"}return a}},{key:"output",get:function(){return console.warn("BibLatexExporter.output will be deprecated in biblatex-csl-converter 2.x. Use BibLatexExporter.parse() instead."),this.parse()}}]),e}();e.BibLatexExporter=u}();
