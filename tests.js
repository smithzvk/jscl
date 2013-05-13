var l1313 = (new Symbol(make_lisp_string("*TOTAL-TESTS*")));
(function(){
    ((l1313).value = 0);
    return l1313;
})();
var l1314 = (new Symbol(make_lisp_string("*PASSED-TESTS*")));
(function(){
    ((l1314).value = 0);
    return l1314;
})();
var l1315 = (new Symbol(make_lisp_string("*FAILED-TESTS*")));
(function(){
    ((l1315).value = 0);
    return l1315;
})();
var l1316 = (new Symbol(make_lisp_string("*EXPECTED-FAILURES*")));
(function(){
    ((l1316).value = 0);
    return l1316;
})();
var l1317 = (new Symbol(make_lisp_string("*UNEXPECTED-PASSES*")));
(function(){
    ((l1317).value = 0);
    return l1317;
})();
var l1318 = (new Symbol(make_lisp_string("*USE-HTML-OUTPUT-P*")));
(function(){
    (((l1318.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l1318).value = l4.value));
    return l1318;
})();
var l1319 = (new Symbol(make_lisp_string("*TIMESTAMP*")));
(function(){
    (((l1319.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l1319).value = l5.value));
    return l1319;
})();
var l1320 = (new Symbol(make_lisp_string("TEST")));
l1320;
var l1321 = (new Symbol(make_lisp_string("EXPECTED-FAILURE")));
l1321;
var l1322 = (new Symbol(make_lisp_string("TEST-EQUAL")));
l1322;
var l1323 = make_lisp_string("Running tests...~%~%");
l112.fvalue(pv, 2, l4.value, l1323);
((l1319).value = (new Date()).getTime());
var l1324 = make_lisp_string("Test `~S' passed~%");
var l1325 = QIList(l27,QIList(l37,l5,1,l5),l5,l5);
var l1326 = make_lisp_string("<font color='red'>Test `~S' failed.</font>~%");
var l1327 = make_lisp_string("Test `~S' failed.~%");
(function(){
    (l27.fvalue(pv, 2, (l5.value !== l5.value ? 1 : l5.value), l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1325);
        return (function(){
            var v2926 = 1;
            var v2927 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2926;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2927);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1325) : l112.fvalue(pv, 3, l4.value, l1327, l1325));
        return (function(){
            var v2928 = 1;
            var v2929 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2928;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2929);
        })();
    })());
    return (function(){
        var v2930 = 1;
        var v2931 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2930;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2931);
    })();
})();
var l1328 = QIList(l20,QIList(l37,1,2,l5),2,l5);
(function(){
    ((function(){
        var x1 = (1 !== l5.value ? 2 : l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==2?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1328);
        return (function(){
            var v2932 = 1;
            var v2933 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2932;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2933);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1328) : l112.fvalue(pv, 3, l4.value, l1327, l1328));
        return (function(){
            var v2934 = 1;
            var v2935 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2934;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2935);
        })();
    })());
    return (function(){
        var v2936 = 1;
        var v2937 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2936;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2937);
    })();
})();
var l1329 = QIList(l20,QIList(l38,l5,1,l5),1,l5);
(function(){
    ((function(){
        var x1 = (function(v2938){
            return (v2938 !== l5.value ? v2938 : 1);
        })(l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1329);
        return (function(){
            var v2939 = 1;
            var v2940 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2939;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2940);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1329) : l112.fvalue(pv, 3, l4.value, l1327, l1329));
        return (function(){
            var v2941 = 1;
            var v2942 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2941;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2942);
        })();
    })());
    return (function(){
        var v2943 = 1;
        var v2944 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2943;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2944);
    })();
})();
var l1330 = QIList(l20,QIList(l38,1,2,l5),1,l5);
(function(){
    ((function(){
        var x1 = (function(v2945){
            return (v2945 !== l5.value ? v2945 : 2);
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1330);
        return (function(){
            var v2946 = 1;
            var v2947 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2946;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2947);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1330) : l112.fvalue(pv, 3, l4.value, l1327, l1330));
        return (function(){
            var v2948 = 1;
            var v2949 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2948;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2949);
        })();
    })());
    return (function(){
        var v2950 = 1;
        var v2951 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2950;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2951);
    })();
})();
var l1331 = QIList(l27,l5,QIList(l34,l5),l5);
(function(){
    (l27.fvalue(pv, 2, l5.value, l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1331);
        return (function(){
            var v2952 = 1;
            var v2953 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2952;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2953);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1331) : l112.fvalue(pv, 3, l4.value, l1327, l1331));
        return (function(){
            var v2954 = 1;
            var v2955 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2954;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2955);
        })();
    })());
    return (function(){
        var v2956 = 1;
        var v2957 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2956;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2957);
    })();
})();
var l1332 = QIList(l20,1,QIList(l34,QIList(1,l5),l5),l5);
(function(){
    ((function(){
        var x1 = (function(v2958){
            return (v2958 !== l5.value ? v2958 : l5.value);
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (1==x1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1332);
        return (function(){
            var v2959 = 1;
            var v2960 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2959;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2960);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1332) : l112.fvalue(pv, 3, l4.value, l1327, l1332));
        return (function(){
            var v2961 = 1;
            var v2962 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2961;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2962);
        })();
    })());
    return (function(){
        var v2963 = 1;
        var v2964 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2963;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2964);
    })();
})();
var l1333 = QIList(l20,1,QIList(l725,QIList(QIList(l1245,0,l5),l5),QIList(l34,QIList(QIList(l29,l1245,l5),l5),l5),l5),l5);
(function(){
    ((function(){
        var x1 = (function(v2965){
            return (function(v2968){
                return (v2968 !== l5.value ? v2968 : l5.value);
            })((function(){
                var v2966 = 1;
                var v2967 = (function(){
                    var x1 = v2965;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v2966;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return (v2965 = v2967);
            })());
        })(0);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (1==x1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1333);
        return (function(){
            var v2969 = 1;
            var v2970 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2969;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2970);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1333) : l112.fvalue(pv, 3, l4.value, l1327, l1333));
        return (function(){
            var v2971 = 1;
            var v2972 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2971;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2972);
        })();
    })());
    return (function(){
        var v2973 = 1;
        var v2974 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2973;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2974);
    })();
})();
var l1334 = QIList(l20,2,QIList(l34,QIList(1,2,l5),l5),l5);
(function(){
    ((function(){
        var x1 = (1 !== l5.value ? 2 : l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (2==x1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1334);
        return (function(){
            var v2975 = 1;
            var v2976 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2975;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2976);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1334) : l112.fvalue(pv, 3, l4.value, l1327, l1334));
        return (function(){
            var v2977 = 1;
            var v2978 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2977;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2978);
        })();
    })());
    return (function(){
        var v2979 = 1;
        var v2980 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2979;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2980);
    })();
})();
var l1335 = QIList(l20,3,QIList(l34,QIList(l5,1,l5),QIList(2,3,l5),l5),l5);
(function(){
    ((function(){
        var x1 = (l5.value !== l5.value ? 1 : (2 !== l5.value ? 3 : l5.value));
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (3==x1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1335);
        return (function(){
            var v2981 = 1;
            var v2982 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2981;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2982);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1335) : l112.fvalue(pv, 3, l4.value, l1327, l1335));
        return (function(){
            var v2983 = 1;
            var v2984 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2983;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2984);
        })();
    })());
    return (function(){
        var v2985 = 1;
        var v2986 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2985;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2986);
    })();
})();
var l1336 = QIList(l27,l5,QIList(l34,QIList(l5,1,l5),QIList(l5,2,l5),l5),l5);
(function(){
    (l27.fvalue(pv, 2, l5.value, (l5.value !== l5.value ? 1 : (l5.value !== l5.value ? 2 : l5.value))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1336);
        return (function(){
            var v2987 = 1;
            var v2988 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2987;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2988);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1336) : l112.fvalue(pv, 3, l4.value, l1327, l1336));
        return (function(){
            var v2989 = 1;
            var v2990 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2989;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2990);
        })();
    })());
    return (function(){
        var v2991 = 1;
        var v2992 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2991;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2992);
    })();
})();
var l1337 = QIList(l20,QIList(l35,1,QIList(2,3,l5),QIList(l1242,42,l5),l5),42,l5);
(function(){
    ((function(){
        var x1 = (function(v2993){
            return (l27.fvalue(pv, 2, v2993, 2) !== l5.value ? (function(){
                l5.value;
                return 3;
            })() : (function(){
                l5.value;
                return 42;
            })());
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==42?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1337);
        return (function(){
            var v2994 = 1;
            var v2995 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2994;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v2995);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1337) : l112.fvalue(pv, 3, l4.value, l1327, l1337));
        return (function(){
            var v2996 = 1;
            var v2997 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v2996;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v2997);
        })();
    })());
    return (function(){
        var v2998 = 1;
        var v2999 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v2998;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v2999);
    })();
})();
var l1338 = QIList(l20,QIList(l35,1,QIList(2,3,l5),QIList(l4,42,l5),l5),42,l5);
(function(){
    ((function(){
        var x1 = (function(v3000){
            return (l27.fvalue(pv, 2, v3000, 2) !== l5.value ? (function(){
                l5.value;
                return 3;
            })() : (function(){
                l5.value;
                return 42;
            })());
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==42?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1338);
        return (function(){
            var v3001 = 1;
            var v3002 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3001;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3002);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1338) : l112.fvalue(pv, 3, l4.value, l1327, l1338));
        return (function(){
            var v3003 = 1;
            var v3004 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3003;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3004);
        })();
    })());
    return (function(){
        var v3005 = 1;
        var v3006 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3005;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3006);
    })();
})();
var l1339 = QIList(l20,QIList(l35,1,QIList(2,3,l5),QIList(1,42,l5),l5),42,l5);
(function(){
    ((function(){
        var x1 = (function(v3007){
            return (l27.fvalue(pv, 2, v3007, 2) !== l5.value ? (function(){
                l5.value;
                return 3;
            })() : (l27.fvalue(pv, 2, v3007, 1) !== l5.value ? (function(){
                l5.value;
                return 42;
            })() : l5.value));
        })(1);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==42?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1339);
        return (function(){
            var v3008 = 1;
            var v3009 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3008;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3009);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1339) : l112.fvalue(pv, 3, l4.value, l1327, l1339));
        return (function(){
            var v3010 = 1;
            var v3011 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3010;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3011);
        })();
    })());
    return (function(){
        var v3012 = 1;
        var v3013 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3012;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3013);
    })();
})();
var l1340 = QIList(l44,QIList(l35,1,QIList(2,3,l5),l5),l5);
(function(){
    (l44.fvalue(pv, 1, (function(v3014){
        return (l27.fvalue(pv, 2, v3014, 2) !== l5.value ? (function(){
            l5.value;
            return 3;
        })() : l5.value);
    })(1)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1340);
        return (function(){
            var v3015 = 1;
            var v3016 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3015;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3016);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1340) : l112.fvalue(pv, 3, l4.value, l1327, l1340));
        return (function(){
            var v3017 = 1;
            var v3018 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3017;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3018);
        })();
    })());
    return (function(){
        var v3019 = 1;
        var v3020 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3019;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3020);
    })();
})();
var l1341 = (new Symbol(make_lisp_string("FOO")));
(function(){
    (l1341).fvalue = (function(){
        var func = (function (values,nargs,v3021){
            checkArgs(nargs, 1);
            return (function(){
                try {
                var v3022 = [];
                    (v3021 !== l5.value ? (function(){
                        var f = v3021;
                        return (typeof f === 'function'? f: f.fvalue)(pv, 0)
                    })() : l5.value);
                    l1341.fvalue(pv, 1, (function (values,nargs){
                        checkArgsAtMost(nargs, 0);
                        return (function(){
                            var values = mv;
                            throw ({type: 'block', id: v3022, values: 1, message: 'Return from unknown block FOO.'})
                        })();
                    }));
                    return (function(){
                        var values = mv;
                        throw ({type: 'block', id: v3022, values: 2, message: 'Return from unknown block FOO.'})
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v3022)
                        return values.apply(this, forcemv(cf.values));
                    else
                        throw cf;
                }
            })();
        });
        func.fname = 'FOO';
        return func;
    })();
    return l1341;
})();
var l1342 = QIList(l20,QIList(l1341,l5,l5),1,l5);
(function(){
    ((function(){
        var x1 = l1341.fvalue(pv, 1, l5.value);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1342);
        return (function(){
            var v3023 = 1;
            var v3024 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3023;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3024);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1342) : l112.fvalue(pv, 3, l4.value, l1327, l1342));
        return (function(){
            var v3025 = 1;
            var v3026 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3025;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3026);
        })();
    })());
    return (function(){
        var v3027 = 1;
        var v3028 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3027;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3028);
    })();
})();
var l1343 = (new Symbol(make_lisp_string("FOO-2")));
(function(){
    (l1343).fvalue = (function(){
        var func = (function (values,nargs,v3029){
            checkArgs(nargs, 1);
            return (function(){
                return (function(v3031){
                    (function(){
                        var v3032 = 1;
                        var v3033 = [];
                        tbloop:
                        while (true) {
                            try {
                                switch(v3032){
                                case 1:
                                    (v3029 !== l5.value ? (function(){
                                        var f = v3029;
                                        return (typeof f === 'function'? f: f.fvalue)(pv, 0)
                                    })() : l5.value);
                                    l1343.fvalue(pv, 1, (function (values,nargs){
                                        checkArgsAtMost(nargs, 0);
                                        return (function(){
                                            throw ({type: 'tagbody', id: v3033, label: 2, message: 'Attempt to GO to non-existing tag EXIT-2'})
                                        })();
                                    }));
                                    (function(){
                                        throw ({type: 'tagbody', id: v3033, label: 3, message: 'Attempt to GO to non-existing tag END'})
                                    })();
                                case 2:
                                    (v3031 = l4.value);
                                case 3:
                                default:
                                    break tbloop;
                                }
                            }
                            catch (jump) {
                                if (jump.type == 'tagbody' && jump.id == v3033)
                                    v3032 = jump.label;
                                else
                                    throw(jump);
                            }
                        }
                        return l5.value;
                    })();
                    return v3031;
                })(l5.value);
            })();
        });
        func.fname = 'FOO-2';
        return func;
    })();
    return l1343;
})();
var l1344 = QIList(l1343,l5,l5);
(function(){
    (l1343.fvalue(pv, 1, l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1344);
        return (function(){
            var v3034 = 1;
            var v3035 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3034;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3035);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1344) : l112.fvalue(pv, 3, l4.value, l1327, l1344));
        return (function(){
            var v3036 = 1;
            var v3037 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3036;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3037);
        })();
    })());
    return (function(){
        var v3038 = 1;
        var v3039 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3038;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3039);
    })();
})();
var l1345 = QIList(l74,QIList(l696,QIList(QIList(l1341,l5,QIList(l762,l1341,42,l5),l5),l5),QIList(l1341,l5),l5),42,l5);
(function(){
    (l74.fvalue(pv, 2, (function(v3041){
        return v3041(pv, 0);
    })((function (values,nargs){
        checkArgsAtMost(nargs, 0);
        return (function(){
            try {
            var v3040 = [];
                return (function(){
                    var values = mv;
                    throw ({type: 'block', id: v3040, values: 42, message: 'Return from unknown block FOO.'})
                })();
            }
            catch (cf){
                if (cf.type == 'block' && cf.id == v3040)
                    return values.apply(this, forcemv(cf.values));
                else
                    throw cf;
            }
        })();
    })), 42) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1345);
        return (function(){
            var v3042 = 1;
            var v3043 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3042;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3043);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1345) : l112.fvalue(pv, 3, l4.value, l1327, l1345));
        return (function(){
            var v3044 = 1;
            var v3045 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3044;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3045);
        })();
    })());
    return (function(){
        var v3046 = 1;
        var v3047 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3046;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3047);
    })();
})();
var l1346 = QIList(-5,-4,-3,999,1,2,3,4,5,l5);
var l1347 = (new Symbol(make_lisp_string("OUT")));
var l1348 = (new Symbol(make_lisp_string("ZFOO")));
var l1349 = (new Symbol(make_lisp_string("N")));
var l1350 = (new Symbol(make_lisp_string("RF")));
var l1351 = (new Symbol(make_lisp_string("I")));
var l1352 = QIList(l74,QIList(l725,QIList(QIList(l1347,QIList(l92,l5),l5),l5),QIList(l703,QIList(QIList(l1348,QIList(l1349,l1350,l1351,l5),QIList(l485,QIList(l954,l1349,0,l5),QIList(l196,QIList(l31,QIList(l6,l5,QIList(l762,l1348,l1349,l5),l5),l1350,l5),QIList(l31,l1349,l1347,l5),QIList(l1348,QIList(l24,l1349,l5),l1350,l1351,l5),QIList(l31,QIList(l43,l1349,l5),l1347,l5),l5),QIList(l196,QIList(l31,999,l1347,l5),QIList(l1087,QIList(l151,l1351,QIList(l49,l1350,l5),l5),l5),QIList(l31,-999,l1347,l5),l5),l5),l5),l5),QIList(l725,QIList(QIList(l1350,QIList(l92,l5),l5),l5),QIList(l1348,5,l1350,3,l5),l1347,l5),l5),l5),QIList(l389,l1346,l5),l5);
(function(){
    (l74.fvalue(pv, 2, (function(v3048){
        return (function(){
            var v3049 = (function (values,nargs,v3050,v3051,v3052){
                checkArgs(nargs, 3);
                return (function(){
                    try {
                    var v3053 = [];
                        return ((function(){
                            var x1 = v3050;
                            if (typeof x1 !== 'number') throw 'Not a number!';
                            return (x1>0?l4.value: l5.value);
                        })() !== l5.value ? (function(){
                            (function(){
                                var v3054 = (function (values,nargs){
                                    checkArgsAtMost(nargs, 0);
                                    return (function(){
                                        var values = mv;
                                        throw ({type: 'block', id: v3053, values: v3050, message: 'Return from unknown block ZFOO.'})
                                    })();
                                });
                                var v3055 = ({car: v3054, cdr: v3051});
                                return (v3051 = v3055);
                            })();
                            (function(){
                                var v3056 = v3050;
                                var v3057 = ({car: v3056, cdr: v3048});
                                return (v3048 = v3057);
                            })();
                            v3049(pv, 3, l24.fvalue(pv, 1, v3050), v3051, v3052);
                            return (function(){
                                var v3058 = (function(){
                                    var x1 = v3050;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    return -x1;
                                })();
                                var v3059 = ({car: v3058, cdr: v3048});
                                return (v3048 = v3059);
                            })();
                        })() : (function(){
                            (function(){
                                var v3060 = 999;
                                var v3061 = ({car: v3060, cdr: v3048});
                                return (v3048 = v3061);
                            })();
                            (function(){
                                var f = l151.fvalue(pv, 2, v3052, l49.fvalue(pv, 1, v3051));
                                return (typeof f === 'function'? f: f.fvalue)(pv, 0)
                            })();
                            return (function(){
                                var v3062 = -999;
                                var v3063 = ({car: v3062, cdr: v3048});
                                return (v3048 = v3063);
                            })();
                        })());
                    }
                    catch (cf){
                        if (cf.type == 'block' && cf.id == v3053)
                            return values.apply(this, forcemv(cf.values));
                        else
                            throw cf;
                    }
                })();
            });
            return (function(v3064){
                v3049(pv, 3, 5, v3064, 3);
                return v3048;
            })(l92.fvalue(pv, 0));
        })();
    })(l92.fvalue(pv, 0)), l1346) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1352);
        return (function(){
            var v3065 = 1;
            var v3066 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3065;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3066);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1352) : l112.fvalue(pv, 3, l4.value, l1327, l1352));
        return (function(){
            var v3067 = 1;
            var v3068 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3067;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3068);
        })();
    })());
    return (function(){
        var v3069 = 1;
        var v3070 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3069;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3070);
    })();
})();
var l1353 = QIList(1,2,l5);
var l1354 = QIList(1,2,l5);
var l1355 = QIList(l74,QIList(l389,l1353,l5),QIList(l389,l1354,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l1353, l1354) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1355);
        return (function(){
            var v3071 = 1;
            var v3072 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3071;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3072);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1355) : l112.fvalue(pv, 3, l4.value, l1327, l1355));
        return (function(){
            var v3073 = 1;
            var v3074 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3073;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3074);
        })();
    })());
    return (function(){
        var v3075 = 1;
        var v3076 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3075;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3076);
    })();
})();
var l1356 = QIList(l74,1,1,l5);
(function(){
    (l74.fvalue(pv, 2, 1, 1) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1356);
        return (function(){
            var v3077 = 1;
            var v3078 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3077;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3078);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1356) : l112.fvalue(pv, 3, l4.value, l1327, l1356));
        return (function(){
            var v3079 = 1;
            var v3080 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3079;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3080);
        })();
    })());
    return (function(){
        var v3081 = 1;
        var v3082 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3081;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3082);
    })();
})();
var l1357 = make_lisp_string("abc");
var l1358 = make_lisp_string("abc");
var l1359 = QIList(l74,l1357,l1358,l5);
(function(){
    (l74.fvalue(pv, 2, l1357, l1358) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1359);
        return (function(){
            var v3083 = 1;
            var v3084 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3083;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3084);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1359) : l112.fvalue(pv, 3, l4.value, l1327, l1359));
        return (function(){
            var v3085 = 1;
            var v3086 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3085;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3086);
        })();
    })());
    return (function(){
        var v3087 = 1;
        var v3088 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3087;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3088);
    })();
})();
var l1360 = make_lisp_string("abc");
var l1361 = make_lisp_string("def");
var l1362 = QIList(l28,QIList(l74,l1360,l1361,l5),l5);
(function(){
    (l28.fvalue(pv, 1, l74.fvalue(pv, 2, l1360, l1361)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1362);
        return (function(){
            var v3089 = 1;
            var v3090 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3089;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3090);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1362) : l112.fvalue(pv, 3, l4.value, l1327, l1362));
        return (function(){
            var v3091 = 1;
            var v3092 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3091;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3092);
        })();
    })());
    return (function(){
        var v3093 = 1;
        var v3094 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3093;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3094);
    })();
})();
var l1363 = make_lisp_string("Abc");
var l1364 = make_lisp_string("abc");
var l1365 = QIList(l28,QIList(l74,l1363,l1364,l5),l5);
(function(){
    (l28.fvalue(pv, 1, l74.fvalue(pv, 2, l1363, l1364)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1365);
        return (function(){
            var v3095 = 1;
            var v3096 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3095;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3096);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1365) : l112.fvalue(pv, 3, l4.value, l1327, l1365));
        return (function(){
            var v3097 = 1;
            var v3098 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3097;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3098);
        })();
    })());
    return (function(){
        var v3099 = 1;
        var v3100 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3099;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3100);
    })();
})();
var l1366 = QIList(l42,1,2,l5);
var l1367 = QIList(l20,QIList(l322,QIList(l389,l1366,l5),l5),3,l5);
(function(){
    ((function(){
        var x1 = l322.fvalue(pv, 1, l1366);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==3?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1367);
        return (function(){
            var v3101 = 1;
            var v3102 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3101;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3102);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1367) : l112.fvalue(pv, 3, l4.value, l1327, l1367));
        return (function(){
            var v3103 = 1;
            var v3104 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3103;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3104);
        })();
    })());
    return (function(){
        var v3105 = 1;
        var v3106 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3105;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3106);
    })();
})();
var l1368 = make_lisp_string("a");
var l1369 = make_lisp_string("a");
var l1370 = QIList(l75,l1368,QIList(l112,l5,l1369,l5),l5);
(function(){
    (l75.fvalue(pv, 2, l1368, l112.fvalue(pv, 2, l5.value, l1369)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1370);
        return (function(){
            var v3107 = 1;
            var v3108 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3107;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3108);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1370) : l112.fvalue(pv, 3, l4.value, l1327, l1370));
        return (function(){
            var v3109 = 1;
            var v3110 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3109;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3110);
        })();
    })());
    return (function(){
        var v3111 = 1;
        var v3112 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3111;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3112);
    })();
})();
var l1371 = make_lisp_string("~");
var l1372 = make_lisp_string("~~");
var l1373 = QIList(l75,l1371,QIList(l112,l5,l1372,l5),l5);
(function(){
    (l75.fvalue(pv, 2, l1371, l112.fvalue(pv, 2, l5.value, l1372)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1373);
        return (function(){
            var v3113 = 1;
            var v3114 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3113;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3114);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1373) : l112.fvalue(pv, 3, l4.value, l1327, l1373));
        return (function(){
            var v3115 = 1;
            var v3116 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3115;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3116);
        })();
    })());
    return (function(){
        var v3117 = 1;
        var v3118 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3117;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3118);
    })();
})();
var l1374 = make_lisp_string("a~a");
var l1375 = make_lisp_string("a~~a");
var l1376 = QIList(l75,l1374,QIList(l112,l5,l1375,l5),l5);
(function(){
    (l75.fvalue(pv, 2, l1374, l112.fvalue(pv, 2, l5.value, l1375)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1376);
        return (function(){
            var v3119 = 1;
            var v3120 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3119;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3120);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1376) : l112.fvalue(pv, 3, l4.value, l1327, l1376));
        return (function(){
            var v3121 = 1;
            var v3122 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3121;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3122);
        })();
    })());
    return (function(){
        var v3123 = 1;
        var v3124 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3123;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3124);
    })();
})();
var l1377 = make_lisp_string("a\na");
var l1378 = make_lisp_string("a~%a");
var l1379 = QIList(l75,l1377,QIList(l112,l5,l1378,l5),l5);
(function(){
    (l75.fvalue(pv, 2, l1377, l112.fvalue(pv, 2, l5.value, l1378)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1379);
        return (function(){
            var v3125 = 1;
            var v3126 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3125;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3126);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1379) : l112.fvalue(pv, 3, l4.value, l1327, l1379));
        return (function(){
            var v3127 = 1;
            var v3128 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3127;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3128);
        })();
    })());
    return (function(){
        var v3129 = 1;
        var v3130 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3129;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3130);
    })();
})();
var l1380 = make_lisp_string("this is foo");
var l1381 = make_lisp_string("this is ~a");
var l1382 = make_lisp_string("foo");
var l1383 = QIList(l75,l1380,QIList(l112,l5,l1381,l1382,l5),l5);
(function(){
    (l75.fvalue(pv, 2, l1380, l112.fvalue(pv, 3, l5.value, l1381, l1382)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1383);
        return (function(){
            var v3131 = 1;
            var v3132 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3131;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3132);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1383) : l112.fvalue(pv, 3, l4.value, l1327, l1383));
        return (function(){
            var v3133 = 1;
            var v3134 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3133;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3134);
        })();
    })());
    return (function(){
        var v3135 = 1;
        var v3136 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3135;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3136);
    })();
})();
var l1384 = make_lisp_string("this is \"foo\"");
var l1385 = make_lisp_string("this is ~S");
var l1386 = make_lisp_string("foo");
var l1387 = QIList(l75,l1384,QIList(l112,l5,l1385,l1386,l5),l5);
(function(){
    (l75.fvalue(pv, 2, l1384, l112.fvalue(pv, 3, l5.value, l1385, l1386)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1387);
        return (function(){
            var v3137 = 1;
            var v3138 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3137;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3138);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1387) : l112.fvalue(pv, 3, l4.value, l1327, l1387));
        return (function(){
            var v3139 = 1;
            var v3140 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3139;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3140);
        })();
    })());
    return (function(){
        var v3141 = 1;
        var v3142 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3141;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3142);
    })();
})();
var l1388 = (new Symbol(make_lisp_string("TOTAL")));
var l1389 = QIList(l725,QIList(QIList(l1388,0,l5),l5),QIList(l33,QIList(l1349,6,l5),QIList(l29,l1388,l1349,l5),l5),QIList(l20,l1388,15,l5),l5);
(function(){
    ((function(v3143){
        (function(){
            return (function(v3145,v3146){
                (function(){
                    while((function(){
                        var x1 = v3145;
                        if (typeof x1 !== 'number') throw 'Not a number!';
                        var x2 = v3146;
                        if (typeof x2 !== 'number') throw 'Not a number!';
                        return (x1<x2?l4.value: l5.value);
                    })() !== l5.value){
                        (function(){
                            (function(){
                                var v3147 = v3145;
                                var v3148 = (function(){
                                    var x1 = v3143;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v3147;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                                return (v3143 = v3148);
                            })();
                            return l5.value;
                        })();
                        (function(){
                            var v3149 = 1;
                            var v3150 = (function(){
                                var x1 = v3145;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v3149;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })();
                            return (v3145 = v3150);
                        })();
                    }return l5.value;
                })();
                return l5.value;
            })(0,6);
        })();
        return (function(){
            var x1 = v3143;
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==15?l4.value: l5.value);
        })();
    })(0) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1389);
        return (function(){
            var v3151 = 1;
            var v3152 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3151;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3152);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1389) : l112.fvalue(pv, 3, l4.value, l1327, l1389));
        return (function(){
            var v3153 = 1;
            var v3154 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3153;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3154);
        })();
    })());
    return (function(){
        var v3155 = 1;
        var v3156 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3155;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3156);
    })();
})();
var l1390 = QIList(1,2,3,4,5,l5);
var l1391 = QIList(l725,QIList(QIList(l1388,0,l5),l5),QIList(l32,QIList(l1349,QIList(l389,l1390,l5),l5),QIList(l29,l1388,l1349,l5),l5),QIList(l20,l1388,15,l5),l5);
(function(){
    ((function(v3157){
        (function(){
            return (function(v3159,v3160){
                (function(){
                    while(v3159 !== l5.value){
                        (v3160 = (function(){
                            var tmp = v3159;
                            return tmp === l5.value? l5.value: tmp.car;
                        })());
                        (function(){
                            (function(){
                                var v3161 = v3160;
                                var v3162 = (function(){
                                    var x1 = v3157;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    var x2 = v3161;
                                    if (typeof x2 !== 'number') throw 'Not a number!';
                                    return x1+x2;
                                })();
                                return (v3157 = v3162);
                            })();
                            return l5.value;
                        })();
                        (v3159 = (function(){
                            var tmp = v3159;
                            return tmp === l5.value? l5.value: tmp.cdr;
                        })());
                    }return l5.value;
                })();
                return l5.value;
            })(l1390,l5.value);
        })();
        return (function(){
            var x1 = v3157;
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==15?l4.value: l5.value);
        })();
    })(0) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1391);
        return (function(){
            var v3163 = 1;
            var v3164 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3163;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3164);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1391) : l112.fvalue(pv, 3, l4.value, l1327, l1391));
        return (function(){
            var v3165 = 1;
            var v3166 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3165;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3166);
        })();
    })());
    return (function(){
        var v3167 = 1;
        var v3168 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3167;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3168);
    })();
})();
var l1392 = (new Symbol(make_lisp_string("A")));
var l1393 = (new Symbol(make_lisp_string("B")));
var l1394 = QIList(l51,QIList(QIList(l1392,0,l1393,l5),QIList(l1393,1,QIList(l42,l1392,l1393,l5),l5),QIList(l1349,0,QIList(l23,l1349,l5),l5),l5),QIList(QIList(l20,l1349,10,l5),QIList(l20,l1392,55,l5),l5),l5);
(function(){
    ((function(){
        return (function(v3170,v3171,v3172){
            return (function(){
                try {
                var v3173 = [];
                    return (function(){
                        while(l4.value !== l5.value){
                            ((function(){
                                var x1 = v3172;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                return (x1==10?l4.value: l5.value);
                            })() !== l5.value ? (function(){
                                throw ({type: 'block', id: v3173, values: (function(){
                                    var x1 = v3170;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    return (x1==55?l4.value: l5.value);
                                })(), message: 'Return from unknown block NIL.'})
                            })() : l5.value);
                            l5.value;
                            (function(v3174,v3175,v3176){
                                return (v3170 = v3174, v3171 = v3175, v3172 = v3176);
                            })(v3171,(function(){
                                var x1 = v3170;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v3171;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })(),l23.fvalue(pv, 1, v3172));
                        }return l5.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v3173)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
        })(0,1,0);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1394);
        return (function(){
            var v3177 = 1;
            var v3178 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3177;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3178);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1394) : l112.fvalue(pv, 3, l4.value, l1327, l1394));
        return (function(){
            var v3179 = 1;
            var v3180 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3179;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3180);
        })();
    })());
    return (function(){
        var v3181 = 1;
        var v3182 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3181;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3182);
    })();
})();
var l1395 = QIList(l52,QIList(QIList(l1392,0,l1393,l5),QIList(l1393,1,QIList(l42,l1392,l1393,l5),l5),QIList(l1349,0,QIList(l23,l1349,l5),l5),l5),QIList(QIList(l20,l1349,10,l5),QIList(l20,l1392,512,l5),l5),l5);
(function(){
    ((function(){
        return (function(){
            var v3184 = 0;
            var v3185 = 1;
            var v3186 = 0;
            return (function(){
                try {
                var v3187 = [];
                    return (function(){
                        while(l4.value !== l5.value){
                            ((function(){
                                var x1 = v3186;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                return (x1==10?l4.value: l5.value);
                            })() !== l5.value ? (function(){
                                throw ({type: 'block', id: v3187, values: (function(){
                                    var x1 = v3184;
                                    if (typeof x1 !== 'number') throw 'Not a number!';
                                    return (x1==512?l4.value: l5.value);
                                })(), message: 'Return from unknown block NIL.'})
                            })() : l5.value);
                            l5.value;
                            (v3184 = v3185, v3185 = (function(){
                                var x1 = v3184;
                                if (typeof x1 !== 'number') throw 'Not a number!';
                                var x2 = v3185;
                                if (typeof x2 !== 'number') throw 'Not a number!';
                                return x1+x2;
                            })(), v3186 = l23.fvalue(pv, 1, v3186));
                        }return l5.value;
                    })();
                }
                catch (cf){
                    if (cf.type == 'block' && cf.id == v3187)
                        return cf.values;
                    else
                        throw cf;
                }
            })();
        })();
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1395);
        return (function(){
            var v3188 = 1;
            var v3189 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3188;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3189);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1395) : l112.fvalue(pv, 3, l4.value, l1327, l1395));
        return (function(){
            var v3190 = 1;
            var v3191 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3190;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3191);
        })();
    })());
    return (function(){
        var v3192 = 1;
        var v3193 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3192;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3193);
    })();
})();
var l1396 = QIList(1,2);
var l1397 = QIList(l74,QIList(l127,1,2,l5),QIList(l389,l1396,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: 1, cdr: 2}), l1396) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1397);
        return (function(){
            var v3194 = 1;
            var v3195 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3194;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3195);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1397) : l112.fvalue(pv, 3, l4.value, l1327, l1397));
        return (function(){
            var v3196 = 1;
            var v3197 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3196;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3197);
        })();
    })());
    return (function(){
        var v3198 = 1;
        var v3199 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3198;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3199);
    })();
})();
var l1398 = QIList(1,l5);
var l1399 = QIList(l74,QIList(l127,1,l5,l5),QIList(l389,l1398,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: 1, cdr: l5.value}), l1398) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1399);
        return (function(){
            var v3200 = 1;
            var v3201 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3200;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3201);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1399) : l112.fvalue(pv, 3, l4.value, l1327, l1399));
        return (function(){
            var v3202 = 1;
            var v3203 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3202;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3203);
        })();
    })());
    return (function(){
        var v3204 = 1;
        var v3205 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3204;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3205);
    })();
})();
var l1400 = QIList(l5,2);
var l1401 = QIList(l74,QIList(l127,l5,2,l5),QIList(l389,l1400,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: l5.value, cdr: 2}), l1400) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1401);
        return (function(){
            var v3206 = 1;
            var v3207 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3206;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3207);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1401) : l112.fvalue(pv, 3, l4.value, l1327, l1401));
        return (function(){
            var v3208 = 1;
            var v3209 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3208;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3209);
        })();
    })());
    return (function(){
        var v3210 = 1;
        var v3211 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3210;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3211);
    })();
})();
var l1402 = QIList(l5,l5);
var l1403 = QIList(l74,QIList(l127,l5,l5,l5),QIList(l389,l1402,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: l5.value, cdr: l5.value}), l1402) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1403);
        return (function(){
            var v3212 = 1;
            var v3213 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3212;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3213);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1403) : l112.fvalue(pv, 3, l4.value, l1327, l1403));
        return (function(){
            var v3214 = 1;
            var v3215 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3214;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3215);
        })();
    })());
    return (function(){
        var v3216 = 1;
        var v3217 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3216;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3217);
    })();
})();
var l1404 = QIList(1,2,3,4,l5);
var l1405 = QIList(l74,QIList(l127,1,QIList(l127,2,QIList(l127,3,QIList(l127,4,l5,l5),l5),l5),l5),QIList(l389,l1404,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: 1, cdr: ({car: 2, cdr: ({car: 3, cdr: ({car: 4, cdr: l5.value})})})}), l1404) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1405);
        return (function(){
            var v3218 = 1;
            var v3219 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3218;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3219);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1405) : l112.fvalue(pv, 3, l4.value, l1327, l1405));
        return (function(){
            var v3220 = 1;
            var v3221 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3220;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3221);
        })();
    })());
    return (function(){
        var v3222 = 1;
        var v3223 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3222;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3223);
    })();
})();
var l1406 = QIList(l1392,l1393);
var l1407 = QIList(l74,QIList(l127,QIList(l389,l1392,l5),QIList(l389,l1393,l5),l5),QIList(l389,l1406,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: l1392, cdr: l1393}), l1406) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1407);
        return (function(){
            var v3224 = 1;
            var v3225 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3224;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3225);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1407) : l112.fvalue(pv, 3, l4.value, l1327, l1407));
        return (function(){
            var v3226 = 1;
            var v3227 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3226;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3227);
        })();
    })());
    return (function(){
        var v3228 = 1;
        var v3229 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3228;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3229);
    })();
})();
var l1408 = (new Symbol(make_lisp_string("C")));
var l1409 = QIList(l1392,l1393,l1408,l5);
var l1410 = QIList(l74,QIList(l127,QIList(l389,l1392,l5),QIList(l127,QIList(l389,l1393,l5),QIList(l127,QIList(l389,l1408,l5),QIList(l389,l5,l5),l5),l5),l5),QIList(l389,l1409,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: l1392, cdr: ({car: l1393, cdr: ({car: l1408, cdr: l5})})}), l1409) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1410);
        return (function(){
            var v3230 = 1;
            var v3231 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3230;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3231);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1410) : l112.fvalue(pv, 3, l4.value, l1327, l1410));
        return (function(){
            var v3232 = 1;
            var v3233 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3232;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3233);
        })();
    })());
    return (function(){
        var v3234 = 1;
        var v3235 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3234;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3235);
    })();
})();
var l1411 = (new Symbol(make_lisp_string("D")));
var l1412 = QIList(l1393,l1408,l1411,l5);
var l1413 = QIList(l1392,l1393,l1408,l1411,l5);
var l1414 = QIList(l74,QIList(l127,QIList(l389,l1392,l5),QIList(l389,l1412,l5),l5),QIList(l389,l1413,l5),l5);
(function(){
    (l74.fvalue(pv, 2, ({car: l1392, cdr: l1412}), l1413) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1414);
        return (function(){
            var v3236 = 1;
            var v3237 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3236;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3237);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1414) : l112.fvalue(pv, 3, l4.value, l1327, l1414));
        return (function(){
            var v3238 = 1;
            var v3239 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3238;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3239);
        })();
    })());
    return (function(){
        var v3240 = 1;
        var v3241 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3240;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3241);
    })();
})();
var l1415 = QIList(l28,QIList(l128,QIList(l389,l5,l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, ((function(){
        var tmp = l5;
        return (typeof tmp == 'object' && 'car' in tmp);
    })()?l4.value: l5.value)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1415);
        return (function(){
            var v3242 = 1;
            var v3243 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3242;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3243);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1415) : l112.fvalue(pv, 3, l4.value, l1327, l1415));
        return (function(){
            var v3244 = 1;
            var v3245 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3244;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3245);
        })();
    })());
    return (function(){
        var v3246 = 1;
        var v3247 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3246;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3247);
    })();
})();
var l1416 = QIList(l28,QIList(l128,l5,l5),l5);
(function(){
    (l28.fvalue(pv, 1, ((function(){
        var tmp = l5.value;
        return (typeof tmp == 'object' && 'car' in tmp);
    })()?l4.value: l5.value)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1416);
        return (function(){
            var v3248 = 1;
            var v3249 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3248;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3249);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1416) : l112.fvalue(pv, 3, l4.value, l1327, l1416));
        return (function(){
            var v3250 = 1;
            var v3251 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3250;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3251);
        })();
    })());
    return (function(){
        var v3252 = 1;
        var v3253 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3252;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3253);
    })();
})();
var l1417 = QIList(l28,QIList(l128,l5,l5),l5);
(function(){
    (l28.fvalue(pv, 1, ((function(){
        var tmp = l5.value;
        return (typeof tmp == 'object' && 'car' in tmp);
    })()?l4.value: l5.value)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1417);
        return (function(){
            var v3254 = 1;
            var v3255 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3254;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3255);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1417) : l112.fvalue(pv, 3, l4.value, l1327, l1417));
        return (function(){
            var v3256 = 1;
            var v3257 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3256;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3257);
        })();
    })());
    return (function(){
        var v3258 = 1;
        var v3259 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3258;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3259);
    })();
})();
var l1418 = QIList(l28,QIList(l128,QIList(l389,l5,l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, ((function(){
        var tmp = l5;
        return (typeof tmp == 'object' && 'car' in tmp);
    })()?l4.value: l5.value)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1418);
        return (function(){
            var v3260 = 1;
            var v3261 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3260;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3261);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1418) : l112.fvalue(pv, 3, l4.value, l1327, l1418));
        return (function(){
            var v3262 = 1;
            var v3263 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3262;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3263);
        })();
    })());
    return (function(){
        var v3264 = 1;
        var v3265 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3264;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3265);
    })();
})();
var l1419 = QIList(l128,QIList(l127,1,2,l5),l5);
(function(){
    (((function(){
        var tmp = ({car: 1, cdr: 2});
        return (typeof tmp == 'object' && 'car' in tmp);
    })()?l4.value: l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1419);
        return (function(){
            var v3266 = 1;
            var v3267 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3266;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3267);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1419) : l112.fvalue(pv, 3, l4.value, l1327, l1419));
        return (function(){
            var v3268 = 1;
            var v3269 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3268;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3269);
        })();
    })());
    return (function(){
        var v3270 = 1;
        var v3271 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3270;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3271);
    })();
})();
var l1420 = (new Symbol(make_lisp_string("SSS")));
var l1421 = QIList(l69,QIList(l389,l1420,l5),l5);
(function(){
    (l69.fvalue(pv, 1, l1420) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1421);
        return (function(){
            var v3272 = 1;
            var v3273 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3272;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3273);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1421) : l112.fvalue(pv, 3, l4.value, l1327, l1421));
        return (function(){
            var v3274 = 1;
            var v3275 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3274;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3275);
        })();
    })());
    return (function(){
        var v3276 = 1;
        var v3277 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3276;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3277);
    })();
})();
var l1422 = QIList(l28,QIList(l69,QIList(l127,1,2,l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, l69.fvalue(pv, 1, ({car: 1, cdr: 2}))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1422);
        return (function(){
            var v3278 = 1;
            var v3279 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3278;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3279);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1422) : l112.fvalue(pv, 3, l4.value, l1327, l1422));
        return (function(){
            var v3280 = 1;
            var v3281 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3280;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3281);
        })();
    })());
    return (function(){
        var v3282 = 1;
        var v3283 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3282;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3283);
    })();
})();
var l1423 = QIList(l69,l5,l5);
(function(){
    (l69.fvalue(pv, 1, l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1423);
        return (function(){
            var v3284 = 1;
            var v3285 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3284;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3285);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1423) : l112.fvalue(pv, 3, l4.value, l1327, l1423));
        return (function(){
            var v3286 = 1;
            var v3287 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3286;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3287);
        })();
    })());
    return (function(){
        var v3288 = 1;
        var v3289 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3288;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3289);
    })();
})();
var l1424 = QIList(l69,QIList(l389,l5,l5),l5);
(function(){
    (l69.fvalue(pv, 1, l5) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1424);
        return (function(){
            var v3290 = 1;
            var v3291 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3290;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3291);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1424) : l112.fvalue(pv, 3, l4.value, l1327, l1424));
        return (function(){
            var v3292 = 1;
            var v3293 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3292;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3293);
        })();
    })());
    return (function(){
        var v3294 = 1;
        var v3295 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3294;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3295);
    })();
})();
var l1425 = QIList(l69,3,l5);
(function(){
    (l69.fvalue(pv, 1, 3) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1425);
        return (function(){
            var v3296 = 1;
            var v3297 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3296;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3297);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1425) : l112.fvalue(pv, 3, l4.value, l1327, l1425));
        return (function(){
            var v3298 = 1;
            var v3299 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3298;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3299);
        })();
    })());
    return (function(){
        var v3300 = 1;
        var v3301 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3300;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3301);
    })();
})();
var l1426 = (new Symbol(make_lisp_string("ONE")));
var l1427 = (new Symbol(make_lisp_string("TWO")));
var l1428 = (new Symbol(make_lisp_string("THREE")));
var l1429 = (new Symbol(make_lisp_string("FOUR")));
var l1430 = (new Symbol(make_lisp_string("UNO")));
var l1431 = QIList(l1430,l1427,l1428,l1429);
var l1432 = (new Symbol(make_lisp_string("SOME-LIST")));
var l1433 = QIList(l74,QIList(l197,l1432,QIList(l389,l1430,l5),l5),QIList(l389,l1431,l5),l5);
var l1434 = QIList(l1430,l1427,l1428,l1429);
var l1435 = QIList(l74,l1432,QIList(l389,l1434,l5),l5);
(function(v3302){
    (function(){
        (l74.fvalue(pv, 2, (function(){
            var x = v3302;
            if (typeof x != 'object')
                throw 'The value ' + x + ' is not a type object.';
            return (x.car = l1430, x);
        })(), l1431) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1433);
            return (function(){
                var v3303 = 1;
                var v3304 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3303;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3304);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1433) : l112.fvalue(pv, 3, l4.value, l1327, l1433));
            return (function(){
                var v3305 = 1;
                var v3306 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3305;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3306);
            })();
        })());
        return (function(){
            var v3307 = 1;
            var v3308 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3307;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3308);
        })();
    })();
    return (function(){
        (l74.fvalue(pv, 2, v3302, l1434) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1435);
            return (function(){
                var v3309 = 1;
                var v3310 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3309;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3310);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1435) : l112.fvalue(pv, 3, l4.value, l1327, l1435));
            return (function(){
                var v3311 = 1;
                var v3312 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3311;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3312);
            })();
        })());
        return (function(){
            var v3313 = 1;
            var v3314 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3313;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3314);
        })();
    })();
})(l148.fvalue(pv, 4, l1426, l1427, l1428, l1429));
var l1436 = (new Symbol(make_lisp_string("IV")));
var l1437 = QIList(l1428,l1436,l5);
var l1438 = QIList(l74,QIList(l198,QIList(l189,l1432,l5),QIList(l92,QIList(l389,l1436,l5),l5),l5),QIList(l389,l1437,l5),l5);
var l1439 = QIList(l1426,l1427,l1428,l1436,l5);
var l1440 = QIList(l74,l1432,QIList(l389,l1439,l5),l5);
(function(v3315){
    (function(){
        (l74.fvalue(pv, 2, (function(){
            var x = l189.fvalue(pv, 1, v3315);
            if (typeof x != 'object')
                throw 'The value ' + x + ' is not a type object.';
            return (x.cdr = l92.fvalue(pv, 1, l1436), x);
        })(), l1437) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1438);
            return (function(){
                var v3316 = 1;
                var v3317 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3316;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3317);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1438) : l112.fvalue(pv, 3, l4.value, l1327, l1438));
            return (function(){
                var v3318 = 1;
                var v3319 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3318;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3319);
            })();
        })());
        return (function(){
            var v3320 = 1;
            var v3321 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3320;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3321);
        })();
    })();
    return (function(){
        (l74.fvalue(pv, 2, v3315, l1439) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1440);
            return (function(){
                var v3322 = 1;
                var v3323 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3322;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3323);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1440) : l112.fvalue(pv, 3, l4.value, l1327, l1440));
            return (function(){
                var v3324 = 1;
                var v3325 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3324;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3325);
            })();
        })());
        return (function(){
            var v3326 = 1;
            var v3327 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3326;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3327);
        })();
    })();
})(l148.fvalue(pv, 4, l1426, l1427, l1428, l1429));
var l1441 = QIList(l74,QIList(l131,l5,l5),l5,l5);
(function(){
    (l74.fvalue(pv, 2, (function(){
        var tmp = l5.value;
        return tmp === l5.value? l5.value: tmp.car;
    })(), l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1441);
        return (function(){
            var v3328 = 1;
            var v3329 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3328;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3329);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1441) : l112.fvalue(pv, 3, l4.value, l1327, l1441));
        return (function(){
            var v3330 = 1;
            var v3331 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3330;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3331);
        })();
    })());
    return (function(){
        var v3332 = 1;
        var v3333 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3332;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3333);
    })();
})();
var l1442 = QIList(1,2);
var l1443 = QIList(l74,QIList(l132,QIList(l389,l1442,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, (function(){
        var tmp = l1442;
        return tmp === l5.value? l5.value: tmp.cdr;
    })(), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1443);
        return (function(){
            var v3334 = 1;
            var v3335 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3334;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3335);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1443) : l112.fvalue(pv, 3, l4.value, l1327, l1443));
        return (function(){
            var v3336 = 1;
            var v3337 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3336;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3337);
        })();
    })());
    return (function(){
        var v3338 = 1;
        var v3339 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3338;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3339);
    })();
})();
var l1444 = QIList(1,2,l5);
var l1445 = QIList(2,l5);
var l1446 = QIList(l74,QIList(l132,QIList(l389,l1444,l5),l5),QIList(l389,l1445,l5),l5);
(function(){
    (l74.fvalue(pv, 2, (function(){
        var tmp = l1444;
        return tmp === l5.value? l5.value: tmp.cdr;
    })(), l1445) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1446);
        return (function(){
            var v3340 = 1;
            var v3341 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3340;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3341);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1446) : l112.fvalue(pv, 3, l4.value, l1327, l1446));
        return (function(){
            var v3342 = 1;
            var v3343 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3342;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3343);
        })();
    })());
    return (function(){
        var v3344 = 1;
        var v3345 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3344;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3345);
    })();
})();
var l1447 = QIList(1,2,l5);
var l1448 = QIList(l74,QIList(l135,QIList(l389,l1447,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, l135.fvalue(pv, 1, l1447), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1448);
        return (function(){
            var v3346 = 1;
            var v3347 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3346;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3347);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1448) : l112.fvalue(pv, 3, l4.value, l1327, l1448));
        return (function(){
            var v3348 = 1;
            var v3349 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3348;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3349);
        })();
    })());
    return (function(){
        var v3350 = 1;
        var v3351 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3350;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3351);
    })();
})();
var l1449 = QIList(l1392,l1393,l1408,l5);
var l1450 = QIList(l74,QIList(l131,QIList(l389,l1449,l5),l5),QIList(l389,l1392,l5),l5);
(function(){
    (l74.fvalue(pv, 2, (function(){
        var tmp = l1449;
        return tmp === l5.value? l5.value: tmp.car;
    })(), l1392) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1450);
        return (function(){
            var v3352 = 1;
            var v3353 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3352;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3353);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1450) : l112.fvalue(pv, 3, l4.value, l1327, l1450));
        return (function(){
            var v3354 = 1;
            var v3355 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3354;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3355);
        })();
    })());
    return (function(){
        var v3356 = 1;
        var v3357 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3356;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3357);
    })();
})();
var l1451 = QIList(l1392,l1393,l1408,l5);
var l1452 = QIList(l1393,l1408,l5);
var l1453 = QIList(l74,QIList(l132,QIList(l389,l1451,l5),l5),QIList(l389,l1452,l5),l5);
(function(){
    (l74.fvalue(pv, 2, (function(){
        var tmp = l1451;
        return tmp === l5.value? l5.value: tmp.cdr;
    })(), l1452) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1453);
        return (function(){
            var v3358 = 1;
            var v3359 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3358;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3359);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1453) : l112.fvalue(pv, 3, l4.value, l1327, l1453));
        return (function(){
            var v3360 = 1;
            var v3361 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3360;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3361);
        })();
    })());
    return (function(){
        var v3362 = 1;
        var v3363 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3362;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3363);
    })();
})();
var l1454 = QIList(QIList(1,2,l5),3,l5);
var l1455 = QIList(l74,QIList(l152,QIList(l389,l1454,l5),l5),1,l5);
(function(){
    (l74.fvalue(pv, 2, l152.fvalue(pv, 1, l1454), 1) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1455);
        return (function(){
            var v3364 = 1;
            var v3365 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3364;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3365);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1455) : l112.fvalue(pv, 3, l4.value, l1327, l1455));
        return (function(){
            var v3366 = 1;
            var v3367 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3366;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3367);
        })();
    })());
    return (function(){
        var v3368 = 1;
        var v3369 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3368;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3369);
    })();
})();
var l1456 = QIList(1,2,3,l5);
var l1457 = QIList(l74,QIList(l135,QIList(l389,l1456,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, l135.fvalue(pv, 1, l1456), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1457);
        return (function(){
            var v3370 = 1;
            var v3371 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3370;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3371);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1457) : l112.fvalue(pv, 3, l4.value, l1327, l1457));
        return (function(){
            var v3372 = 1;
            var v3373 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3372;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3373);
        })();
    })());
    return (function(){
        var v3374 = 1;
        var v3375 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3374;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3375);
    })();
})();
var l1458 = QIList(QIList(1,2,l5),3,l5);
var l1459 = QIList(2,l5);
var l1460 = QIList(l74,QIList(l153,QIList(l389,l1458,l5),l5),QIList(l389,l1459,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l153.fvalue(pv, 1, l1458), l1459) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1460);
        return (function(){
            var v3376 = 1;
            var v3377 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3376;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3377);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1460) : l112.fvalue(pv, 3, l4.value, l1327, l1460));
        return (function(){
            var v3378 = 1;
            var v3379 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3378;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3379);
        })();
    })());
    return (function(){
        var v3380 = 1;
        var v3381 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3380;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3381);
    })();
})();
var l1461 = QIList(1,2,3,l5);
var l1462 = QIList(3,l5);
var l1463 = QIList(l74,QIList(l149,QIList(l389,l1461,l5),l5),QIList(l389,l1462,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l149.fvalue(pv, 1, l1461), l1462) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1463);
        return (function(){
            var v3382 = 1;
            var v3383 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3382;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3383);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1463) : l112.fvalue(pv, 3, l4.value, l1327, l1463));
        return (function(){
            var v3384 = 1;
            var v3385 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3384;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3385);
        })();
    })());
    return (function(){
        var v3386 = 1;
        var v3387 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3386;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3387);
    })();
})();
var l1464 = QIList(QIList(QIList(1,l5),l5),l5);
var l1465 = QIList(l74,QIList(l154,QIList(l389,l1464,l5),l5),1,l5);
(function(){
    (l74.fvalue(pv, 2, l154.fvalue(pv, 1, l1464), 1) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1465);
        return (function(){
            var v3388 = 1;
            var v3389 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3388;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3389);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1465) : l112.fvalue(pv, 3, l4.value, l1327, l1465));
        return (function(){
            var v3390 = 1;
            var v3391 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3390;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3391);
        })();
    })());
    return (function(){
        var v3392 = 1;
        var v3393 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3392;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3393);
    })();
})();
var l1466 = QIList(1,QIList(2,l5),l5);
var l1467 = QIList(l74,QIList(l155,QIList(l389,l1466,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, l155.fvalue(pv, 1, l1466), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1467);
        return (function(){
            var v3394 = 1;
            var v3395 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3394;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3395);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1467) : l112.fvalue(pv, 3, l4.value, l1327, l1467));
        return (function(){
            var v3396 = 1;
            var v3397 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3396;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3397);
        })();
    })());
    return (function(){
        var v3398 = 1;
        var v3399 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3398;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3399);
    })();
})();
var l1468 = QIList(QIList(1,2,l5),l5);
var l1469 = QIList(l74,QIList(l156,QIList(l389,l1468,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, l156.fvalue(pv, 1, l1468), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1469);
        return (function(){
            var v3400 = 1;
            var v3401 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3400;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3401);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1469) : l112.fvalue(pv, 3, l4.value, l1327, l1469));
        return (function(){
            var v3402 = 1;
            var v3403 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3402;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3403);
        })();
    })());
    return (function(){
        var v3404 = 1;
        var v3405 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3404;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3405);
    })();
})();
var l1470 = QIList(1,2,3,l5);
var l1471 = QIList(l74,QIList(l137,QIList(l389,l1470,l5),l5),3,l5);
(function(){
    (l74.fvalue(pv, 2, l137.fvalue(pv, 1, l1470), 3) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1471);
        return (function(){
            var v3406 = 1;
            var v3407 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3406;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3407);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1471) : l112.fvalue(pv, 3, l4.value, l1327, l1471));
        return (function(){
            var v3408 = 1;
            var v3409 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3408;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3409);
        })();
    })());
    return (function(){
        var v3410 = 1;
        var v3411 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3410;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3411);
    })();
})();
var l1472 = QIList(QIList(QIList(1,2,l5),l5),l5);
var l1473 = QIList(2,l5);
var l1474 = QIList(l74,QIList(l157,QIList(l389,l1472,l5),l5),QIList(l389,l1473,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l157.fvalue(pv, 1, l1472), l1473) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1474);
        return (function(){
            var v3412 = 1;
            var v3413 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3412;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3413);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1474) : l112.fvalue(pv, 3, l4.value, l1327, l1474));
        return (function(){
            var v3414 = 1;
            var v3415 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3414;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3415);
        })();
    })());
    return (function(){
        var v3416 = 1;
        var v3417 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3416;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3417);
    })();
})();
var l1475 = QIList(1,QIList(2,3,l5),l5);
var l1476 = QIList(3,l5);
var l1477 = QIList(l74,QIList(l158,QIList(l389,l1475,l5),l5),QIList(l389,l1476,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l158.fvalue(pv, 1, l1475), l1476) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1477);
        return (function(){
            var v3418 = 1;
            var v3419 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3418;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3419);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1477) : l112.fvalue(pv, 3, l4.value, l1327, l1477));
        return (function(){
            var v3420 = 1;
            var v3421 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3420;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3421);
        })();
    })());
    return (function(){
        var v3422 = 1;
        var v3423 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3422;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3423);
    })();
})();
var l1478 = QIList(QIList(1,2,3,l5),l5);
var l1479 = QIList(3,l5);
var l1480 = QIList(l74,QIList(l159,QIList(l389,l1478,l5),l5),QIList(l389,l1479,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l159.fvalue(pv, 1, l1478), l1479) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1480);
        return (function(){
            var v3424 = 1;
            var v3425 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3424;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3425);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1480) : l112.fvalue(pv, 3, l4.value, l1327, l1480));
        return (function(){
            var v3426 = 1;
            var v3427 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3426;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3427);
        })();
    })());
    return (function(){
        var v3428 = 1;
        var v3429 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3428;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3429);
    })();
})();
var l1481 = QIList(1,2,3,4,l5);
var l1482 = QIList(4,l5);
var l1483 = QIList(l74,QIList(l160,QIList(l389,l1481,l5),l5),QIList(l389,l1482,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l160.fvalue(pv, 1, l1481), l1482) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1483);
        return (function(){
            var v3430 = 1;
            var v3431 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3430;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3431);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1483) : l112.fvalue(pv, 3, l4.value, l1327, l1483));
        return (function(){
            var v3432 = 1;
            var v3433 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3432;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3433);
        })();
    })());
    return (function(){
        var v3434 = 1;
        var v3435 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3434;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3435);
    })();
})();
var l1484 = QIList(QIList(QIList(QIList(1,l5),l5),l5),l5);
var l1485 = QIList(l74,QIList(l161,QIList(l389,l1484,l5),l5),1,l5);
(function(){
    (l74.fvalue(pv, 2, l161.fvalue(pv, 1, l1484), 1) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1485);
        return (function(){
            var v3436 = 1;
            var v3437 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3436;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3437);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1485) : l112.fvalue(pv, 3, l4.value, l1327, l1485));
        return (function(){
            var v3438 = 1;
            var v3439 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3438;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3439);
        })();
    })());
    return (function(){
        var v3440 = 1;
        var v3441 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3440;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3441);
    })();
})();
var l1486 = QIList(1,QIList(QIList(2,l5),l5),l5);
var l1487 = QIList(l74,QIList(l162,QIList(l389,l1486,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, l162.fvalue(pv, 1, l1486), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1487);
        return (function(){
            var v3442 = 1;
            var v3443 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3442;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3443);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1487) : l112.fvalue(pv, 3, l4.value, l1327, l1487));
        return (function(){
            var v3444 = 1;
            var v3445 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3444;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3445);
        })();
    })());
    return (function(){
        var v3446 = 1;
        var v3447 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3446;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3447);
    })();
})();
var l1488 = QIList(QIList(1,QIList(2,l5),l5),l5);
var l1489 = QIList(l74,QIList(l163,QIList(l389,l1488,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, l163.fvalue(pv, 1, l1488), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1489);
        return (function(){
            var v3448 = 1;
            var v3449 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3448;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3449);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1489) : l112.fvalue(pv, 3, l4.value, l1327, l1489));
        return (function(){
            var v3450 = 1;
            var v3451 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3450;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3451);
        })();
    })());
    return (function(){
        var v3452 = 1;
        var v3453 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3452;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3453);
    })();
})();
var l1490 = QIList(1,2,QIList(3,l5),l5);
var l1491 = QIList(l74,QIList(l164,QIList(l389,l1490,l5),l5),3,l5);
(function(){
    (l74.fvalue(pv, 2, l164.fvalue(pv, 1, l1490), 3) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1491);
        return (function(){
            var v3454 = 1;
            var v3455 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3454;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3455);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1491) : l112.fvalue(pv, 3, l4.value, l1327, l1491));
        return (function(){
            var v3456 = 1;
            var v3457 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3456;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3457);
        })();
    })());
    return (function(){
        var v3458 = 1;
        var v3459 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3458;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3459);
    })();
})();
var l1492 = QIList(QIList(QIList(1,2,l5),l5),l5);
var l1493 = QIList(l74,QIList(l165,QIList(l389,l1492,l5),l5),2,l5);
(function(){
    (l74.fvalue(pv, 2, l165.fvalue(pv, 1, l1492), 2) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1493);
        return (function(){
            var v3460 = 1;
            var v3461 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3460;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3461);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1493) : l112.fvalue(pv, 3, l4.value, l1327, l1493));
        return (function(){
            var v3462 = 1;
            var v3463 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3462;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3463);
        })();
    })());
    return (function(){
        var v3464 = 1;
        var v3465 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3464;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3465);
    })();
})();
var l1494 = QIList(1,QIList(2,3,l5),l5);
var l1495 = QIList(l74,QIList(l166,QIList(l389,l1494,l5),l5),3,l5);
(function(){
    (l74.fvalue(pv, 2, l166.fvalue(pv, 1, l1494), 3) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1495);
        return (function(){
            var v3466 = 1;
            var v3467 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3466;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3467);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1495) : l112.fvalue(pv, 3, l4.value, l1327, l1495));
        return (function(){
            var v3468 = 1;
            var v3469 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3468;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3469);
        })();
    })());
    return (function(){
        var v3470 = 1;
        var v3471 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3470;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3471);
    })();
})();
var l1496 = QIList(QIList(1,2,3,l5),l5);
var l1497 = QIList(l74,QIList(l167,QIList(l389,l1496,l5),l5),3,l5);
(function(){
    (l74.fvalue(pv, 2, l167.fvalue(pv, 1, l1496), 3) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1497);
        return (function(){
            var v3472 = 1;
            var v3473 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3472;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3473);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1497) : l112.fvalue(pv, 3, l4.value, l1327, l1497));
        return (function(){
            var v3474 = 1;
            var v3475 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3474;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3475);
        })();
    })());
    return (function(){
        var v3476 = 1;
        var v3477 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3476;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3477);
    })();
})();
var l1498 = QIList(1,2,3,4,l5);
var l1499 = QIList(l74,QIList(l139,QIList(l389,l1498,l5),l5),4,l5);
(function(){
    (l74.fvalue(pv, 2, l139.fvalue(pv, 1, l1498), 4) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1499);
        return (function(){
            var v3478 = 1;
            var v3479 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3478;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3479);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1499) : l112.fvalue(pv, 3, l4.value, l1327, l1499));
        return (function(){
            var v3480 = 1;
            var v3481 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3480;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3481);
        })();
    })());
    return (function(){
        var v3482 = 1;
        var v3483 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3482;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3483);
    })();
})();
var l1500 = QIList(QIList(QIList(QIList(1,2,l5),l5),l5),l5);
var l1501 = QIList(2,l5);
var l1502 = QIList(l74,QIList(l168,QIList(l389,l1500,l5),l5),QIList(l389,l1501,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l168.fvalue(pv, 1, l1500), l1501) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1502);
        return (function(){
            var v3484 = 1;
            var v3485 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3484;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3485);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1502) : l112.fvalue(pv, 3, l4.value, l1327, l1502));
        return (function(){
            var v3486 = 1;
            var v3487 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3486;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3487);
        })();
    })());
    return (function(){
        var v3488 = 1;
        var v3489 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3488;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3489);
    })();
})();
var l1503 = QIList(1,QIList(QIList(2,3,l5),l5),l5);
var l1504 = QIList(3,l5);
var l1505 = QIList(l74,QIList(l169,QIList(l389,l1503,l5),l5),QIList(l389,l1504,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l169.fvalue(pv, 1, l1503), l1504) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1505);
        return (function(){
            var v3490 = 1;
            var v3491 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3490;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3491);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1505) : l112.fvalue(pv, 3, l4.value, l1327, l1505));
        return (function(){
            var v3492 = 1;
            var v3493 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3492;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3493);
        })();
    })());
    return (function(){
        var v3494 = 1;
        var v3495 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3494;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3495);
    })();
})();
var l1506 = QIList(QIList(1,QIList(2,3,l5),l5),l5);
var l1507 = QIList(3,l5);
var l1508 = QIList(l74,QIList(l170,QIList(l389,l1506,l5),l5),QIList(l389,l1507,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l170.fvalue(pv, 1, l1506), l1507) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1508);
        return (function(){
            var v3496 = 1;
            var v3497 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3496;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3497);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1508) : l112.fvalue(pv, 3, l4.value, l1327, l1508));
        return (function(){
            var v3498 = 1;
            var v3499 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3498;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3499);
        })();
    })());
    return (function(){
        var v3500 = 1;
        var v3501 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3500;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3501);
    })();
})();
var l1509 = QIList(1,2,QIList(3,4,l5),l5);
var l1510 = QIList(4,l5);
var l1511 = QIList(l74,QIList(l171,QIList(l389,l1509,l5),l5),QIList(l389,l1510,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l171.fvalue(pv, 1, l1509), l1510) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1511);
        return (function(){
            var v3502 = 1;
            var v3503 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3502;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3503);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1511) : l112.fvalue(pv, 3, l4.value, l1327, l1511));
        return (function(){
            var v3504 = 1;
            var v3505 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3504;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3505);
        })();
    })());
    return (function(){
        var v3506 = 1;
        var v3507 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3506;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3507);
    })();
})();
var l1512 = QIList(QIList(QIList(1,2,3,l5),l5),l5);
var l1513 = QIList(3,l5);
var l1514 = QIList(l74,QIList(l172,QIList(l389,l1512,l5),l5),QIList(l389,l1513,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l172.fvalue(pv, 1, l1512), l1513) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1514);
        return (function(){
            var v3508 = 1;
            var v3509 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3508;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3509);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1514) : l112.fvalue(pv, 3, l4.value, l1327, l1514));
        return (function(){
            var v3510 = 1;
            var v3511 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3510;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3511);
        })();
    })());
    return (function(){
        var v3512 = 1;
        var v3513 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3512;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3513);
    })();
})();
var l1515 = QIList(1,QIList(2,3,4,l5),l5);
var l1516 = QIList(4,l5);
var l1517 = QIList(l74,QIList(l173,QIList(l389,l1515,l5),l5),QIList(l389,l1516,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l173.fvalue(pv, 1, l1515), l1516) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1517);
        return (function(){
            var v3514 = 1;
            var v3515 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3514;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3515);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1517) : l112.fvalue(pv, 3, l4.value, l1327, l1517));
        return (function(){
            var v3516 = 1;
            var v3517 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3516;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3517);
        })();
    })());
    return (function(){
        var v3518 = 1;
        var v3519 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3518;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3519);
    })();
})();
var l1518 = QIList(QIList(1,2,3,4,l5),l5);
var l1519 = QIList(4,l5);
var l1520 = QIList(l74,QIList(l174,QIList(l389,l1518,l5),l5),QIList(l389,l1519,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l174.fvalue(pv, 1, l1518), l1519) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1520);
        return (function(){
            var v3520 = 1;
            var v3521 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3520;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3521);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1520) : l112.fvalue(pv, 3, l4.value, l1327, l1520));
        return (function(){
            var v3522 = 1;
            var v3523 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3522;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3523);
        })();
    })());
    return (function(){
        var v3524 = 1;
        var v3525 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3524;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3525);
    })();
})();
var l1521 = QIList(1,2,3,4,5,l5);
var l1522 = QIList(5,l5);
var l1523 = QIList(l74,QIList(l141,QIList(l389,l1521,l5),l5),QIList(l389,l1522,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l141.fvalue(pv, 1, l1521), l1522) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1523);
        return (function(){
            var v3526 = 1;
            var v3527 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3526;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3527);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1523) : l112.fvalue(pv, 3, l4.value, l1327, l1523));
        return (function(){
            var v3528 = 1;
            var v3529 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3528;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3529);
        })();
    })());
    return (function(){
        var v3530 = 1;
        var v3531 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3530;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3531);
    })();
})();
var l1524 = (new Symbol(make_lisp_string("Z")));
var l1525 = (new Symbol(make_lisp_string("ZPRIME")));
var l1526 = QIList(QIList(l1245,100),QIList(l1524,l1525),l5);
var l1527 = (new Symbol(make_lisp_string("PLUS")));
var l1528 = (new Symbol(make_lisp_string("MINUS")));
var l1529 = (new Symbol(make_lisp_string("G")));
var l1530 = (new Symbol(make_lisp_string("P")));
var l1531 = QIList(l1527,l1245,QIList(l1528,l1529,l1524,l1245,l1530,l5),4,l1245);
var l1532 = QIList(l1527,100,QIList(l1528,l1529,l1525,100,l1530,l5),4,100);
var l1533 = QIList(l74,QIList(l175,QIList(l389,l1526,l5),QIList(l389,l1531,l5),l5),QIList(l389,l1532,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l175.fvalue(pv, 2, l1526, l1531), l1532) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1533);
        return (function(){
            var v3532 = 1;
            var v3533 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3532;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3533);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1533) : l112.fvalue(pv, 3, l4.value, l1327, l1533));
        return (function(){
            var v3534 = 1;
            var v3535 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3534;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3535);
        })();
    })());
    return (function(){
        var v3536 = 1;
        var v3537 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3536;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3537);
    })();
})();
var l1534 = (new Symbol(make_lisp_string("Y")));
var l1535 = QIList(QIList(QIList(l42,l1245,l1534,l5),l43,l1245,l1534,l5),QIList(QIList(l43,l1245,l1534,l5),l42,l1245,l1534,l5),l5);
var l1536 = QIList(l21,QIList(l22,QIList(l42,l1245,l1534,l5),QIList(l42,l1245,l1530,l5),l5),QIList(l43,l1245,l1534,l5),l5);
var l1537 = QIList(l21,QIList(l22,QIList(l43,l1245,l1534,l5),QIList(l42,l1245,l1530,l5),l5),QIList(l42,l1245,l1534,l5),l5);
var l1538 = QIList(l74,QIList(l175,QIList(l389,l1535,l5),QIList(l389,l1536,l5),l177,QIList(l82,l74,l5),l5),QIList(l389,l1537,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l175.fvalue(pv, 4, l1535, l1536, l177.value, (function(){
        var symbol = l74;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()), l1537) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1538);
        return (function(){
            var v3538 = 1;
            var v3539 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3538;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3539);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1538) : l112.fvalue(pv, 3, l4.value, l1327, l1538));
        return (function(){
            var v3540 = 1;
            var v3541 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3540;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3541);
        })();
    })());
    return (function(){
        var v3542 = 1;
        var v3543 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3542;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3543);
    })();
})();
var l1539 = QIList(1,QIList(1,2,l5),QIList(QIList(1,2,3,l5),l5),QIList(QIList(QIList(1,2,3,4,l5),l5),l5),l5);
var l1540 = QIList(QIList(3,make_lisp_string("three")),l5);
var l1541 = QIList(1,QIList(1,2,l5),QIList(QIList(1,2,make_lisp_string("three"),l5),l5),QIList(QIList(QIList(1,2,make_lisp_string("three"),4,l5),l5),l5),l5);
var l1542 = (new Symbol(make_lisp_string("TREE1")));
var l1543 = QIList(l74,QIList(l175,QIList(l389,l1540,l5),l1542,l5),QIList(l389,l1541,l5),l5);
var l1544 = QIList(QIList(l4,make_lisp_string("string")),l5);
var l1545 = QIList(QIList(1,l108),QIList(4,44),l5);
var l1546 = QIList(make_lisp_string("string"),QIList(make_lisp_string("string"),2,l5),QIList(QIList(make_lisp_string("string"),2,3,l5),l5),QIList(QIList(QIList(make_lisp_string("string"),2,3,44,l5),l5),l5),l5);
var l1547 = QIList(l74,QIList(l175,QIList(l389,l1544,l5),QIList(l175,QIList(l389,l1545,l5),l1542,l5),l176,QIList(l82,l204,l5),l5),QIList(l389,l1546,l5),l5);
var l1548 = QIList(1,QIList(1,2,l5),QIList(QIList(1,2,3,l5),l5),QIList(QIList(QIList(1,2,3,4,l5),l5),l5),l5);
var l1549 = QIList(l74,l1542,QIList(l389,l1548,l5),l5);
(function(v3544){
    (function(){
        (l74.fvalue(pv, 2, l175.fvalue(pv, 2, l1540, v3544), l1541) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1543);
            return (function(){
                var v3545 = 1;
                var v3546 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3545;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3546);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1543) : l112.fvalue(pv, 3, l4.value, l1327, l1543));
            return (function(){
                var v3547 = 1;
                var v3548 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3547;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3548);
            })();
        })());
        return (function(){
            var v3549 = 1;
            var v3550 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3549;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3550);
        })();
    })();
    (function(){
        (l74.fvalue(pv, 2, l175.fvalue(pv, 4, l1544, l175.fvalue(pv, 2, l1545, v3544), l176.value, (function(){
            var symbol = l204;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })()), l1546) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1547);
            return (function(){
                var v3551 = 1;
                var v3552 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3551;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3552);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1547) : l112.fvalue(pv, 3, l4.value, l1327, l1547));
            return (function(){
                var v3553 = 1;
                var v3554 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3553;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3554);
            })();
        })());
        return (function(){
            var v3555 = 1;
            var v3556 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3555;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3556);
        })();
    })();
    return (function(){
        (l74.fvalue(pv, 2, v3544, l1548) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1549);
            return (function(){
                var v3557 = 1;
                var v3558 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3557;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3558);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1549) : l112.fvalue(pv, 3, l4.value, l1327, l1549));
            return (function(){
                var v3559 = 1;
                var v3560 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3559;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3560);
            })();
        })());
        return (function(){
            var v3561 = 1;
            var v3562 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3561;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3562);
        })();
    })();
})(l1539);
var l1550 = QIList(make_lisp_string("one"),QIList(make_lisp_string("one"),make_lisp_string("two"),l5),QIList(QIList(make_lisp_string("one"),make_lisp_string("Two"),make_lisp_string("three"),l5),l5),l5);
var l1551 = QIList(QIList(make_lisp_string("two"),2),l5);
var l1552 = QIList(make_lisp_string("one"),QIList(make_lisp_string("one"),make_lisp_string("two"),l5),QIList(QIList(make_lisp_string("one"),make_lisp_string("Two"),make_lisp_string("three"),l5),l5),l5);
var l1553 = (new Symbol(make_lisp_string("TREE2")));
var l1554 = QIList(l74,QIList(l175,QIList(l389,l1551,l5),l1553,l5),QIList(l389,l1552,l5),l5);
var l1555 = QIList(make_lisp_string("one"),QIList(make_lisp_string("one"),make_lisp_string("two"),l5),QIList(QIList(make_lisp_string("one"),make_lisp_string("Two"),make_lisp_string("three"),l5),l5),l5);
var l1556 = QIList(l74,l1553,QIList(l389,l1555,l5),l5);
var l1557 = QIList(QIList(make_lisp_string("two"),2),l5);
var l1558 = QIList(make_lisp_string("one"),QIList(make_lisp_string("one"),2,l5),QIList(QIList(make_lisp_string("one"),make_lisp_string("Two"),make_lisp_string("three"),l5),l5),l5);
var l1559 = QIList(l74,QIList(l175,QIList(l389,l1557,l5),l1553,l177,QIList(l389,l74,l5),l5),QIList(l389,l1558,l5),l5);
(function(v3563){
    (function(){
        (l74.fvalue(pv, 2, l175.fvalue(pv, 2, l1551, v3563), l1552) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1554);
            return (function(){
                var v3564 = 1;
                var v3565 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3564;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3565);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1554) : l112.fvalue(pv, 3, l4.value, l1327, l1554));
            return (function(){
                var v3566 = 1;
                var v3567 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3566;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3567);
            })();
        })());
        return (function(){
            var v3568 = 1;
            var v3569 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3568;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3569);
        })();
    })();
    (function(){
        (l74.fvalue(pv, 2, v3563, l1555) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1556);
            return (function(){
                var v3570 = 1;
                var v3571 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3570;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3571);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1556) : l112.fvalue(pv, 3, l4.value, l1327, l1556));
            return (function(){
                var v3572 = 1;
                var v3573 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3572;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3573);
            })();
        })());
        return (function(){
            var v3574 = 1;
            var v3575 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3574;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3575);
        })();
    })();
    return (function(){
        (l74.fvalue(pv, 2, l175.fvalue(pv, 4, l1557, v3563, l177.value, l74), l1558) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1559);
            return (function(){
                var v3576 = 1;
                var v3577 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3576;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3577);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1559) : l112.fvalue(pv, 3, l4.value, l1327, l1559));
            return (function(){
                var v3578 = 1;
                var v3579 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3578;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3579);
            })();
        })());
        return (function(){
            var v3580 = 1;
            var v3581 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3580;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3581);
        })();
    })();
})(l1550);
var l1560 = QIList(1,2,l5);
var l1561 = QIList(3,4,l5);
var l1562 = (new Symbol(make_lisp_string("BAR")));
var l1563 = QIList(l486,QIList(QIList(l1341,QIList(l92,QIList(l389,l1560,l5),QIList(l389,l1561,l5),l5),l5),QIList(l1562,QIList(l181,l1341,l5),l5),l5),QIList(l197,QIList(l131,l1341,l5),0,l5),QIList(l28,QIList(l20,QIList(l131,QIList(l131,l1341,l5),l5),QIList(l131,QIList(l131,l1562,l5),l5),l5),l5),l5);
(function(){
    ((function(){
        var v3582 = l92.fvalue(pv, 2, l1560, l1561);
        var v3583 = l181.fvalue(pv, 1, v3582);
        (function(){
            var x = (function(){
                var tmp = v3582;
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x != 'object')
                throw 'The value ' + x + ' is not a type object.';
            return (x.car = 0, x);
        })();
        return l28.fvalue(pv, 1, (function(){
            var x1 = (function(){
                var tmp = (function(){
                    var tmp = v3582;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = (function(){
                var tmp = (function(){
                    var tmp = v3583;
                    return tmp === l5.value? l5.value: tmp.car;
                })();
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x2 !== 'number') throw 'Not a number!';
            return (x1==x2?l4.value: l5.value);
        })());
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1563);
        return (function(){
            var v3584 = 1;
            var v3585 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3584;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3585);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1563) : l112.fvalue(pv, 3, l4.value, l1327, l1563));
        return (function(){
            var v3586 = 1;
            var v3587 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3586;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3587);
        })();
    })());
    return (function(){
        var v3588 = 1;
        var v3589 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3588;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3589);
    })();
})();
var l1564 = QIList(1,2,3,l5);
var l1565 = QIList(1,2,3,l5);
var l1566 = QIList(l182,QIList(l389,l1564,l5),QIList(l389,l1565,l5),l5);
(function(){
    (l182.fvalue(pv, 2, l1564, l1565) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1566);
        return (function(){
            var v3590 = 1;
            var v3591 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3590;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3591);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1566) : l112.fvalue(pv, 3, l4.value, l1327, l1566));
        return (function(){
            var v3592 = 1;
            var v3593 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3592;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3593);
        })();
    })());
    return (function(){
        var v3594 = 1;
        var v3595 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3594;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3595);
    })();
})();
var l1567 = QIList(1,QIList(2,QIList(3,4,l5),5,l5),6,l5);
var l1568 = QIList(1,QIList(2,QIList(3,4,l5),5,l5),6,l5);
var l1569 = QIList(l182,QIList(l389,l1567,l5),QIList(l389,l1568,l5),l5);
(function(){
    (l182.fvalue(pv, 2, l1567, l1568) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1569);
        return (function(){
            var v3596 = 1;
            var v3597 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3596;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3597);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1569) : l112.fvalue(pv, 3, l4.value, l1327, l1569));
        return (function(){
            var v3598 = 1;
            var v3599 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3598;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3599);
        })();
    })());
    return (function(){
        var v3600 = 1;
        var v3601 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3600;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3601);
    })();
})();
var l1570 = QIList(l182,QIList(l127,1,2,l5),QIList(l127,2,3,l5),l177,QIList(l6,QIList(l1392,l1393,l5),QIList(l28,QIList(l20,l1392,l1393,l5),l5),l5),l5);
(function(){
    (l182.fvalue(pv, 4, ({car: 1, cdr: 2}), ({car: 2, cdr: 3}), l177.value, (function (values,nargs,v3602,v3603){
        checkArgs(nargs, 2);
        return l28.fvalue(values, 1, (function(){
            var x1 = v3602;
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3603;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return (x1==x2?l4.value: l5.value);
        })());
    })) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1570);
        return (function(){
            var v3604 = 1;
            var v3605 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3604;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3605);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1570) : l112.fvalue(pv, 3, l4.value, l1327, l1570));
        return (function(){
            var v3606 = 1;
            var v3607 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3606;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3607);
        })();
    })());
    return (function(){
        var v3608 = 1;
        var v3609 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3608;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3609);
    })();
})();
var l1571 = QIList(1,2,3,4,5,6,7,8,9,10,l5);
var l1572 = (new Symbol(make_lisp_string("NUMS")));
var l1573 = QIList(l20,QIList(l133,l1572,l5),1,l5);
var l1574 = QIList(l20,QIList(l134,l1572,l5),2,l5);
var l1575 = QIList(l20,QIList(l136,l1572,l5),3,l5);
var l1576 = QIList(l20,QIList(l138,l1572,l5),4,l5);
var l1577 = QIList(l20,QIList(l140,l1572,l5),5,l5);
var l1578 = QIList(l20,QIList(l142,l1572,l5),6,l5);
var l1579 = QIList(l20,QIList(l143,l1572,l5),7,l5);
var l1580 = QIList(l20,QIList(l144,l1572,l5),8,l5);
var l1581 = QIList(l20,QIList(l145,l1572,l5),9,l5);
var l1582 = QIList(l20,QIList(l146,l1572,l5),10,l5);
(function(v3610){
    (function(){
        ((function(){
            var x1 = l133.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==1?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1573);
            return (function(){
                var v3611 = 1;
                var v3612 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3611;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3612);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1573) : l112.fvalue(pv, 3, l4.value, l1327, l1573));
            return (function(){
                var v3613 = 1;
                var v3614 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3613;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3614);
            })();
        })());
        return (function(){
            var v3615 = 1;
            var v3616 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3615;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3616);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l134.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==2?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1574);
            return (function(){
                var v3617 = 1;
                var v3618 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3617;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3618);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1574) : l112.fvalue(pv, 3, l4.value, l1327, l1574));
            return (function(){
                var v3619 = 1;
                var v3620 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3619;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3620);
            })();
        })());
        return (function(){
            var v3621 = 1;
            var v3622 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3621;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3622);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l136.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==3?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1575);
            return (function(){
                var v3623 = 1;
                var v3624 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3623;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3624);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1575) : l112.fvalue(pv, 3, l4.value, l1327, l1575));
            return (function(){
                var v3625 = 1;
                var v3626 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3625;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3626);
            })();
        })());
        return (function(){
            var v3627 = 1;
            var v3628 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3627;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3628);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l138.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==4?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1576);
            return (function(){
                var v3629 = 1;
                var v3630 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3629;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3630);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1576) : l112.fvalue(pv, 3, l4.value, l1327, l1576));
            return (function(){
                var v3631 = 1;
                var v3632 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3631;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3632);
            })();
        })());
        return (function(){
            var v3633 = 1;
            var v3634 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3633;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3634);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l140.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==5?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1577);
            return (function(){
                var v3635 = 1;
                var v3636 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3635;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3636);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1577) : l112.fvalue(pv, 3, l4.value, l1327, l1577));
            return (function(){
                var v3637 = 1;
                var v3638 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3637;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3638);
            })();
        })());
        return (function(){
            var v3639 = 1;
            var v3640 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3639;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3640);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l142.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==6?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1578);
            return (function(){
                var v3641 = 1;
                var v3642 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3641;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3642);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1578) : l112.fvalue(pv, 3, l4.value, l1327, l1578));
            return (function(){
                var v3643 = 1;
                var v3644 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3643;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3644);
            })();
        })());
        return (function(){
            var v3645 = 1;
            var v3646 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3645;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3646);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l143.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==7?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1579);
            return (function(){
                var v3647 = 1;
                var v3648 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3647;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3648);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1579) : l112.fvalue(pv, 3, l4.value, l1327, l1579));
            return (function(){
                var v3649 = 1;
                var v3650 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3649;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3650);
            })();
        })());
        return (function(){
            var v3651 = 1;
            var v3652 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3651;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3652);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l144.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==8?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1580);
            return (function(){
                var v3653 = 1;
                var v3654 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3653;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3654);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1580) : l112.fvalue(pv, 3, l4.value, l1327, l1580));
            return (function(){
                var v3655 = 1;
                var v3656 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3655;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3656);
            })();
        })());
        return (function(){
            var v3657 = 1;
            var v3658 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3657;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3658);
        })();
    })();
    (function(){
        ((function(){
            var x1 = l145.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==9?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1581);
            return (function(){
                var v3659 = 1;
                var v3660 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3659;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3660);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1581) : l112.fvalue(pv, 3, l4.value, l1327, l1581));
            return (function(){
                var v3661 = 1;
                var v3662 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3661;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3662);
            })();
        })());
        return (function(){
            var v3663 = 1;
            var v3664 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3663;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3664);
        })();
    })();
    return (function(){
        ((function(){
            var x1 = l146.fvalue(pv, 1, v3610);
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==10?l4.value: l5.value);
        })() !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1582);
            return (function(){
                var v3665 = 1;
                var v3666 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3665;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3666);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1582) : l112.fvalue(pv, 3, l4.value, l1327, l1582));
            return (function(){
                var v3667 = 1;
                var v3668 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3667;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3668);
            })();
        })());
        return (function(){
            var v3669 = 1;
            var v3670 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3669;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3670);
        })();
    })();
})(l1571);
var l1583 = QIList(l183,l1393,l1392,l5);
var l1584 = QIList(l183,l1392,l1392,l5);
(function(){
    var v3671 = l92.fvalue(pv, 3, 1, 2, 3);
    var v3672 = (function(){
        var tmp = v3671;
        return tmp === l5.value? l5.value: tmp.cdr;
    })();
    (function(){
        (l183.fvalue(pv, 2, v3672, v3671) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1583);
            return (function(){
                var v3673 = 1;
                var v3674 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3673;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3674);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1583) : l112.fvalue(pv, 3, l4.value, l1327, l1583));
            return (function(){
                var v3675 = 1;
                var v3676 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3675;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3676);
            })();
        })());
        return (function(){
            var v3677 = 1;
            var v3678 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3677;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3678);
        })();
    })();
    return (function(){
        (l183.fvalue(pv, 2, v3671, v3671) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1584);
            return (function(){
                var v3679 = 1;
                var v3680 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3679;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3680);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1584) : l112.fvalue(pv, 3, l4.value, l1327, l1584));
            return (function(){
                var v3681 = 1;
                var v3682 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3681;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3682);
            })();
        })());
        return (function(){
            var v3683 = 1;
            var v3684 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3683;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3684);
        })();
    })();
})();
var l1585 = QIList(l183,QIList(l389,l1392,l5),QIList(l127,QIList(l389,l1393,l5),QIList(l389,l1392,l5),l5),l5);
(function(){
    (l183.fvalue(pv, 2, l1392, ({car: l1393, cdr: l1392})) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1585);
        return (function(){
            var v3685 = 1;
            var v3686 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3685;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3686);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1585) : l112.fvalue(pv, 3, l4.value, l1327, l1585));
        return (function(){
            var v3687 = 1;
            var v3688 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3687;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3688);
        })();
    })());
    return (function(){
        var v3689 = 1;
        var v3690 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3689;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3690);
    })();
})();
var l1586 = QIList(QIList(1,2),QIList(3,4),l5);
var l1587 = QIList(QIList(3,4),l5);
var l1588 = QIList(l74,QIList(l389,l1586,l5),QIList(l193,1,2,QIList(l389,l1587,l5),l5),l5);
(function(){
    (l74.fvalue(pv, 2, l1586, l193.fvalue(pv, 3, 1, 2, l1587)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1588);
        return (function(){
            var v3691 = 1;
            var v3692 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3691;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3692);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1588) : l112.fvalue(pv, 3, l4.value, l1327, l1588));
        return (function(){
            var v3693 = 1;
            var v3694 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3693;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3694);
        })();
    })());
    return (function(){
        var v3695 = 1;
        var v3696 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3695;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3696);
    })();
})();
var l1589 = QIList(QIList(1,2),l5);
var l1590 = QIList(l74,QIList(l389,l1589,l5),QIList(l193,1,2,l5,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l1589, l193.fvalue(pv, 3, 1, 2, l5.value)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1590);
        return (function(){
            var v3697 = 1;
            var v3698 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3697;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3698);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1590) : l112.fvalue(pv, 3, l4.value, l1327, l1590));
        return (function(){
            var v3699 = 1;
            var v3700 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3699;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3700);
        })();
    })());
    return (function(){
        var v3701 = 1;
        var v3702 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3701;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3702);
    })();
})();
var l1591 = QIList(QIList(1,3),QIList(0,2),l5);
var l1592 = QIList(0,1,l5);
var l1593 = QIList(2,3,l5);
var l1594 = QIList(l74,QIList(l389,l1591,l5),QIList(l194,QIList(l389,l1592,l5),QIList(l389,l1593,l5),l5),l5);
(function(){
    (l74.fvalue(pv, 2, l1591, l194.fvalue(pv, 2, l1592, l1593)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1594);
        return (function(){
            var v3703 = 1;
            var v3704 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3703;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3704);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1594) : l112.fvalue(pv, 3, l4.value, l1327, l1594));
        return (function(){
            var v3705 = 1;
            var v3706 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3705;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3706);
        })();
    })());
    return (function(){
        var v3707 = 1;
        var v3708 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3707;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3708);
    })();
})();
var l1595 = QIList(QIList(1,2),QIList(l1392,l1393),l5);
var l1596 = QIList(1,l5);
var l1597 = QIList(2,l5);
var l1598 = QIList(QIList(l1392,l1393),l5);
var l1599 = QIList(l74,QIList(l389,l1595,l5),QIList(l194,QIList(l389,l1596,l5),QIList(l389,l1597,l5),QIList(l389,l1598,l5),l5),l5);
(function(){
    (l74.fvalue(pv, 2, l1595, l194.fvalue(pv, 3, l1596, l1597, l1598)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1599);
        return (function(){
            var v3709 = 1;
            var v3710 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3709;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3710);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1599) : l112.fvalue(pv, 3, l4.value, l1327, l1599));
        return (function(){
            var v3711 = 1;
            var v3712 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3711;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3712);
        })();
    })());
    return (function(){
        var v3713 = 1;
        var v3714 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3713;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3714);
    })();
})();
var l1600 = QIList(QIList(1,2),QIList(3,4),l5);
var l1601 = (new Symbol(make_lisp_string("ALIST")));
var l1602 = (new Symbol(make_lisp_string("COPY")));
var l1603 = QIList(l28,QIList(l27,l1601,l1602,l5),l5);
var l1604 = QIList(l28,QIList(l27,QIList(l131,l1601,l5),QIList(l131,l1602,l5),l5),l5);
var l1605 = QIList(l74,l1601,l1602,l5);
(function(){
    var v3715 = l1600;
    var v3716 = l195.fvalue(pv, 1, v3715);
    (function(){
        (l28.fvalue(pv, 1, l27.fvalue(pv, 2, v3715, v3716)) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1603);
            return (function(){
                var v3717 = 1;
                var v3718 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3717;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3718);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1603) : l112.fvalue(pv, 3, l4.value, l1327, l1603));
            return (function(){
                var v3719 = 1;
                var v3720 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3719;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3720);
            })();
        })());
        return (function(){
            var v3721 = 1;
            var v3722 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3721;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3722);
        })();
    })();
    (function(){
        (l28.fvalue(pv, 1, l27.fvalue(pv, 2, (function(){
            var tmp = v3715;
            return tmp === l5.value? l5.value: tmp.car;
        })(), (function(){
            var tmp = v3716;
            return tmp === l5.value? l5.value: tmp.car;
        })())) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1604);
            return (function(){
                var v3723 = 1;
                var v3724 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3723;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3724);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1604) : l112.fvalue(pv, 3, l4.value, l1327, l1604));
            return (function(){
                var v3725 = 1;
                var v3726 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3725;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3726);
            })();
        })());
        return (function(){
            var v3727 = 1;
            var v3728 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3727;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3728);
        })();
    })();
    return (function(){
        (l74.fvalue(pv, 2, v3715, v3716) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1605);
            return (function(){
                var v3729 = 1;
                var v3730 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3729;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3730);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1605) : l112.fvalue(pv, 3, l4.value, l1327, l1605));
            return (function(){
                var v3731 = 1;
                var v3732 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3731;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3732);
            })();
        })());
        return (function(){
            var v3733 = 1;
            var v3734 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3733;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3734);
        })();
    })();
})();
var l1606 = QIList(QIList(1,2),QIList(3,4),l5);
var l1607 = QIList(1,2);
var l1608 = QIList(l74,QIList(l95,1,l1601,l5),QIList(l389,l1607,l5),l5);
var l1609 = QIList(1,2);
var l1610 = QIList(l74,QIList(l192,2,l1601,l5),QIList(l389,l1609,l5),l5);
var l1611 = QIList(l28,QIList(l95,2,l1601,l5),l5);
var l1612 = QIList(l28,QIList(l192,1,l1601,l5),l5);
(function(v3735){
    (function(){
        (l74.fvalue(pv, 2, l95.fvalue(pv, 2, 1, v3735), l1607) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1608);
            return (function(){
                var v3736 = 1;
                var v3737 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3736;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3737);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1608) : l112.fvalue(pv, 3, l4.value, l1327, l1608));
            return (function(){
                var v3738 = 1;
                var v3739 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3738;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3739);
            })();
        })());
        return (function(){
            var v3740 = 1;
            var v3741 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3740;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3741);
        })();
    })();
    (function(){
        (l74.fvalue(pv, 2, l192.fvalue(pv, 2, 2, v3735), l1609) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1610);
            return (function(){
                var v3742 = 1;
                var v3743 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3742;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3743);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1610) : l112.fvalue(pv, 3, l4.value, l1327, l1610));
            return (function(){
                var v3744 = 1;
                var v3745 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3744;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3745);
            })();
        })());
        return (function(){
            var v3746 = 1;
            var v3747 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3746;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3747);
        })();
    })();
    (function(){
        (l28.fvalue(pv, 1, l95.fvalue(pv, 2, 2, v3735)) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1611);
            return (function(){
                var v3748 = 1;
                var v3749 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3748;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3749);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1611) : l112.fvalue(pv, 3, l4.value, l1327, l1611));
            return (function(){
                var v3750 = 1;
                var v3751 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3750;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3751);
            })();
        })());
        return (function(){
            var v3752 = 1;
            var v3753 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3752;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3753);
        })();
    })();
    return (function(){
        (l28.fvalue(pv, 1, l192.fvalue(pv, 2, 1, v3735)) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1612);
            return (function(){
                var v3754 = 1;
                var v3755 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3754;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3755);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1612) : l112.fvalue(pv, 3, l4.value, l1327, l1612));
            return (function(){
                var v3756 = 1;
                var v3757 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3756;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3757);
            })();
        })());
        return (function(){
            var v3758 = 1;
            var v3759 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3758;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3759);
        })();
    })();
})(l1606);
var l1613 = QIList(1,2,3,l5);
var l1614 = QIList(2,3,l5);
var l1615 = QIList(l74,QIList(l191,2,QIList(l389,l1613,l5),l5),QIList(l389,l1614,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l191.fvalue(pv, 2, 2, l1613), l1614) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1615);
        return (function(){
            var v3760 = 1;
            var v3761 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3760;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3761);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1615) : l112.fvalue(pv, 3, l4.value, l1327, l1615));
        return (function(){
            var v3762 = 1;
            var v3763 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3762;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3763);
        })();
    })());
    return (function(){
        var v3764 = 1;
        var v3765 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3764;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3765);
    })();
})();
var l1616 = QIList(1,2,3,l5);
var l1617 = QIList(l28,QIList(l191,4,QIList(l389,l1616,l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, l191.fvalue(pv, 2, 4, l1616)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1617);
        return (function(){
            var v3766 = 1;
            var v3767 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3766;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3767);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1617) : l112.fvalue(pv, 3, l4.value, l1327, l1617));
        return (function(){
            var v3768 = 1;
            var v3769 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3768;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3769);
        })();
    })());
    return (function(){
        var v3770 = 1;
        var v3771 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3770;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3771);
    })();
})();
var l1618 = QIList(QIList(1,2),QIList(3,4),l5);
var l1619 = QIList(QIList(3,4),l5);
var l1620 = QIList(l74,QIList(l191,4,QIList(l389,l1618,l5),l176,QIList(l82,l132,l5),l5),QIList(l389,l1619,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l191.fvalue(pv, 4, 4, l1618, l176.value, (function(){
        var symbol = l132;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()), l1619) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1620);
        return (function(){
            var v3772 = 1;
            var v3773 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3772;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3773);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1620) : l112.fvalue(pv, 3, l4.value, l1327, l1620));
        return (function(){
            var v3774 = 1;
            var v3775 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3774;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3775);
        })();
    })());
    return (function(){
        var v3776 = 1;
        var v3777 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3776;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3777);
    })();
})();
var l1621 = QIList(2,l5);
var l1622 = QIList(QIList(1,l5),QIList(2,l5),QIList(3,l5),l5);
var l1623 = QIList(l191,QIList(l389,l1621,l5),QIList(l389,l1622,l5),l177,QIList(l82,l74,l5),l5);
(function(){
    (l191.fvalue(pv, 4, l1621, l1622, l177.value, (function(){
        var symbol = l74;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1623);
        return (function(){
            var v3778 = 1;
            var v3779 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3778;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3779);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1623) : l112.fvalue(pv, 3, l4.value, l1327, l1623));
        return (function(){
            var v3780 = 1;
            var v3781 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3780;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3781);
        })();
    })());
    return (function(){
        var v3782 = 1;
        var v3783 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3782;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3783);
    })();
})();
var l1624 = QIList(2,3,l5);
var l1625 = QIList(1,2,3,l5);
var l1626 = QIList(l74,QIList(l202,1,QIList(l389,l1624,l5),l5),QIList(l389,l1625,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l202.fvalue(pv, 2, 1, l1624), l1625) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1626);
        return (function(){
            var v3784 = 1;
            var v3785 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3784;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3785);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1626) : l112.fvalue(pv, 3, l4.value, l1327, l1626));
        return (function(){
            var v3786 = 1;
            var v3787 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3786;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3787);
        })();
    })());
    return (function(){
        var v3788 = 1;
        var v3789 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3788;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3789);
    })();
})();
var l1627 = QIList(1,2,3,l5);
var l1628 = QIList(1,2,3,l5);
var l1629 = QIList(l74,QIList(l202,1,QIList(l389,l1627,l5),l5),QIList(l389,l1628,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l202.fvalue(pv, 2, 1, l1627), l1628) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1629);
        return (function(){
            var v3790 = 1;
            var v3791 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3790;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3791);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1629) : l112.fvalue(pv, 3, l4.value, l1327, l1629));
        return (function(){
            var v3792 = 1;
            var v3793 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3792;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3793);
        })();
    })());
    return (function(){
        var v3794 = 1;
        var v3795 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3794;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3795);
    })();
})();
var l1630 = QIList(1,l5);
var l1631 = QIList(QIList(1,l5),QIList(2,l5),l5);
var l1632 = QIList(QIList(1,l5),QIList(2,l5),l5);
var l1633 = QIList(l74,QIList(l202,QIList(l389,l1630,l5),QIList(l389,l1631,l5),l177,QIList(l82,l74,l5),l5),QIList(l389,l1632,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l202.fvalue(pv, 4, l1630, l1631, l177.value, (function(){
        var symbol = l74;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()), l1632) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1633);
        return (function(){
            var v3796 = 1;
            var v3797 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3796;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3797);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1633) : l112.fvalue(pv, 3, l4.value, l1327, l1633));
        return (function(){
            var v3798 = 1;
            var v3799 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3798;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3799);
        })();
    })());
    return (function(){
        var v3800 = 1;
        var v3801 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3800;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3801);
    })();
})();
var l1634 = QIList(1,2,l5);
var l1635 = QIList(2,3,l5);
var l1636 = QIList(2,l5);
var l1637 = QIList(l74,QIList(l203,QIList(l389,l1634,l5),QIList(l389,l1635,l5),l5),QIList(l389,l1636,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l203.fvalue(pv, 2, l1634, l1635), l1636) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1637);
        return (function(){
            var v3802 = 1;
            var v3803 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3802;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3803);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1637) : l112.fvalue(pv, 3, l4.value, l1327, l1637));
        return (function(){
            var v3804 = 1;
            var v3805 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3804;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3805);
        })();
    })());
    return (function(){
        var v3806 = 1;
        var v3807 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3806;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3807);
    })();
})();
var l1638 = QIList(1,2,3,l5);
var l1639 = QIList(4,5,6,l5);
var l1640 = QIList(l28,QIList(l203,QIList(l389,l1638,l5),QIList(l389,l1639,l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, l203.fvalue(pv, 2, l1638, l1639)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1640);
        return (function(){
            var v3808 = 1;
            var v3809 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3808;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3809);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1640) : l112.fvalue(pv, 3, l4.value, l1327, l1640));
        return (function(){
            var v3810 = 1;
            var v3811 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3810;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3811);
        })();
    })());
    return (function(){
        var v3812 = 1;
        var v3813 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3812;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3813);
    })();
})();
var l1641 = QIList(QIList(1,l5),QIList(2,l5),l5);
var l1642 = QIList(QIList(2,l5),QIList(3,l5),l5);
var l1643 = QIList(QIList(2,l5),l5);
var l1644 = QIList(l74,QIList(l203,QIList(l389,l1641,l5),QIList(l389,l1642,l5),l177,QIList(l82,l74,l5),l5),QIList(l389,l1643,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l203.fvalue(pv, 4, l1641, l1642, l177.value, (function(){
        var symbol = l74;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })()), l1643) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1644);
        return (function(){
            var v3814 = 1;
            var v3815 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3814;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3815);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1644) : l112.fvalue(pv, 3, l4.value, l1327, l1644));
        return (function(){
            var v3816 = 1;
            var v3817 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3816;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3817);
        })();
    })());
    return (function(){
        var v3818 = 1;
        var v3819 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3818;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3819);
    })();
})();
var l1645 = QIList(1,2,3,l5);
var l1646 = QIList(l486,QIList(QIList(l1341,QIList(l389,l1645,l5),l5),QIList(l1562,QIList(l185,l1341,l5),l5),l5),QIList(l37,QIList(l20,l1562,1,l5),QIList(l20,QIList(l131,l1341,l5),2,l5),l5),l5);
(function(){
    ((function(){
        var v3820 = l1645;
        var v3821 = (function(){
            var v3822 = v3820;
            var v3823 = (function(){
                var tmp = v3822;
                return tmp === l5.value? l5.value: tmp.cdr;
            })();
            (v3820 = v3823);
            return (function(){
                var tmp = v3822;
                return tmp === l5.value? l5.value: tmp.car;
            })();
        })();
        return ((function(){
            var x1 = v3821;
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==1?l4.value: l5.value);
        })() !== l5.value ? (function(){
            var x1 = (function(){
                var tmp = v3820;
                return tmp === l5.value? l5.value: tmp.car;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==2?l4.value: l5.value);
        })() : l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1646);
        return (function(){
            var v3824 = 1;
            var v3825 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3824;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3825);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1646) : l112.fvalue(pv, 3, l4.value, l1327, l1646));
        return (function(){
            var v3826 = 1;
            var v3827 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3826;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3827);
        })();
    })());
    return (function(){
        var v3828 = 1;
        var v3829 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3828;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3829);
    })();
})();
var l1647 = QIList(1,2,l5);
var l1648 = QIList(3,l5);
var l1649 = QIList(4,5,6,l5);
var l1650 = QIList(8,l5);
var l1651 = QIList(l74,QIList(l120,QIList(l82,l42,l5),QIList(l389,l1647,l5),QIList(l389,l1648,l5),QIList(l389,l1649,l5),l5),QIList(l389,l1650,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l120.fvalue(pv, 4, (function(){
        var symbol = l42;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })(), l1647, l1648, l1649), l1650) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1651);
        return (function(){
            var v3830 = 1;
            var v3831 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3830;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3831);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1651) : l112.fvalue(pv, 3, l4.value, l1327, l1651));
        return (function(){
            var v3832 = 1;
            var v3833 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3832;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3833);
        })();
    })());
    return (function(){
        var v3834 = 1;
        var v3835 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3834;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3835);
    })();
})();
var l1652 = QIList(1,2,l5);
var l1653 = QIList(3,l5);
var l1654 = QIList(4,5,6,l5);
var l1655 = QIList(1,2,l5);
var l1656 = QIList(l74,QIList(l188,QIList(l82,l42,l5),QIList(l389,l1652,l5),QIList(l389,l1653,l5),QIList(l389,l1654,l5),l5),QIList(l389,l1655,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l188.fvalue(pv, 4, (function(){
        var symbol = l42;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })(), l1652, l1653, l1654), l1655) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1656);
        return (function(){
            var v3836 = 1;
            var v3837 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3836;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3837);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1656) : l112.fvalue(pv, 3, l4.value, l1327, l1656));
        return (function(){
            var v3838 = 1;
            var v3839 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3838;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3839);
        })();
    })());
    return (function(){
        var v3840 = 1;
        var v3841 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3840;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3841);
    })();
})();
var l1657 = QIList(1,2,l5);
var l1658 = QIList(3,l5);
var l1659 = QIList(4,5,6,l5);
var l1660 = QIList(8,l5);
var l1661 = QIList(l725,QIList(l1341,l5),QIList(l188,QIList(l6,QIList(l1245,l1534,l1524,l5),QIList(l31,QIList(l42,l1245,l1534,l1524,l5),l1341,l5),l5),QIList(l389,l1657,l5),QIList(l389,l1658,l5),QIList(l389,l1659,l5),l5),QIList(l74,l1341,QIList(l389,l1660,l5),l5),l5);
(function(){
    ((function(v3842){
        l188.fvalue(pv, 4, (function (values,nargs,v3843,v3844,v3845){
            checkArgs(nargs, 3);
            return (function(){
                var v3846 = (function(){
                    var x1 = v3843;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3844;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    var x3 = v3845;
                    if (typeof x3 !== 'number') throw 'Not a number!';
                    return x1+x2+x3;
                })();
                var v3847 = ({car: v3846, cdr: v3842});
                return (v3842 = v3847);
            })();
        }), l1657, l1658, l1659);
        return l74.fvalue(pv, 2, v3842, l1660);
    })(l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1661);
        return (function(){
            var v3848 = 1;
            var v3849 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3848;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3849);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1661) : l112.fvalue(pv, 3, l4.value, l1327, l1661));
        return (function(){
            var v3850 = 1;
            var v3851 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3850;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3851);
        })();
    })());
    return (function(){
        var v3852 = 1;
        var v3853 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3852;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3853);
    })();
})();
var l1662 = make_lisp_string("FOO");
var l1663 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1341,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1662,l5),l5),l5);
(function(){
    ((function(v3854){
        return (((v3854 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3854).name, l1662) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1341))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1663);
        return (function(){
            var v3855 = 1;
            var v3856 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3855;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3856);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1663) : l112.fvalue(pv, 3, l4.value, l1327, l1663));
        return (function(){
            var v3857 = 1;
            var v3858 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3857;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3858);
        })();
    })());
    return (function(){
        var v3859 = 1;
        var v3860 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3859;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3860);
    })();
})();
var l1664 = (new Symbol(make_lisp_string("FOo")));
var l1665 = make_lisp_string("FOo");
var l1666 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1664,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1665,l5),l5),l5);
(function(){
    ((function(v3861){
        return (((v3861 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3861).name, l1665) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1664))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1666);
        return (function(){
            var v3862 = 1;
            var v3863 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3862;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3863);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1666) : l112.fvalue(pv, 3, l4.value, l1327, l1666));
        return (function(){
            var v3864 = 1;
            var v3865 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3864;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3865);
        })();
    })());
    return (function(){
        var v3866 = 1;
        var v3867 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3866;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3867);
    })();
})();
var l1667 = (new Symbol(make_lisp_string("1..2")));
var l1668 = make_lisp_string("1..2");
var l1669 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1667,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1668,l5),l5),l5);
(function(){
    ((function(v3868){
        return (((v3868 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3868).name, l1668) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1667))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1669);
        return (function(){
            var v3869 = 1;
            var v3870 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3869;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3870);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1669) : l112.fvalue(pv, 3, l4.value, l1327, l1669));
        return (function(){
            var v3871 = 1;
            var v3872 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3871;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3872);
        })();
    })());
    return (function(){
        var v3873 = 1;
        var v3874 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3873;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3874);
    })();
})();
var l1670 = (new Symbol(make_lisp_string("1")));
var l1671 = make_lisp_string("1");
var l1672 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1670,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1671,l5),l5),l5);
(function(){
    ((function(v3875){
        return (((v3875 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3875).name, l1671) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1670))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1672);
        return (function(){
            var v3876 = 1;
            var v3877 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3876;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3877);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1672) : l112.fvalue(pv, 3, l4.value, l1327, l1672));
        return (function(){
            var v3878 = 1;
            var v3879 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3878;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3879);
        })();
    })());
    return (function(){
        var v3880 = 1;
        var v3881 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3880;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3881);
    })();
})();
var l1673 = (new Symbol(make_lisp_string("-10")));
var l1674 = make_lisp_string("-10");
var l1675 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1673,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1674,l5),l5),l5);
(function(){
    ((function(v3882){
        return (((v3882 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3882).name, l1674) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1673))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1675);
        return (function(){
            var v3883 = 1;
            var v3884 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3883;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3884);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1675) : l112.fvalue(pv, 3, l4.value, l1327, l1675));
        return (function(){
            var v3885 = 1;
            var v3886 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3885;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3886);
        })();
    })());
    return (function(){
        var v3887 = 1;
        var v3888 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3887;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3888);
    })();
})();
var l1676 = (new Symbol(make_lisp_string("...")));
var l1677 = make_lisp_string("...");
var l1678 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1676,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1677,l5),l5),l5);
(function(){
    ((function(v3889){
        return (((v3889 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3889).name, l1677) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1676))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1678);
        return (function(){
            var v3890 = 1;
            var v3891 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3890;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3891);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1678) : l112.fvalue(pv, 3, l4.value, l1327, l1678));
        return (function(){
            var v3892 = 1;
            var v3893 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3892;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3893);
        })();
    })());
    return (function(){
        var v3894 = 1;
        var v3895 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3894;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3895);
    })();
})();
var l1679 = (new Symbol(make_lisp_string("1E")));
var l1680 = make_lisp_string("1E");
var l1681 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1679,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1680,l5),l5),l5);
(function(){
    ((function(v3896){
        return (((v3896 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3896).name, l1680) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1679))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1681);
        return (function(){
            var v3897 = 1;
            var v3898 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3897;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3898);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1681) : l112.fvalue(pv, 3, l4.value, l1327, l1681));
        return (function(){
            var v3899 = 1;
            var v3900 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3899;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3900);
        })();
    })());
    return (function(){
        var v3901 = 1;
        var v3902 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3901;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3902);
    })();
})();
var l1682 = (new Symbol(make_lisp_string("1E+2")));
var l1683 = make_lisp_string("1E+2");
var l1684 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1682,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1683,l5),l5),l5);
(function(){
    ((function(v3903){
        return (((v3903 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3903).name, l1683) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1682))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1684);
        return (function(){
            var v3904 = 1;
            var v3905 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3904;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3905);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1684) : l112.fvalue(pv, 3, l4.value, l1327, l1684));
        return (function(){
            var v3906 = 1;
            var v3907 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3906;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3907);
        })();
    })());
    return (function(){
        var v3908 = 1;
        var v3909 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3908;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3909);
    })();
})();
var l1685 = (new Symbol(make_lisp_string("1E+")));
var l1686 = make_lisp_string("1E+");
var l1687 = QIList(l725,QIList(QIList(l1245,QIList(l394,QIList(l271,QIList(l389,l1685,l5),l5),l5),l5),l5),QIList(l37,QIList(l1003,l1245,l5),QIList(l74,QIList(l1009,l1245,l5),l1686,l5),l5),l5);
(function(){
    ((function(v3910){
        return (((v3910 instanceof Symbol)?l4.value: l5.value) !== l5.value ? l74.fvalue(pv, 2, (v3910).name, l1686) : l5.value);
    })(l394.fvalue(pv, 1, l271.fvalue(pv, 1, l1685))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1687);
        return (function(){
            var v3911 = 1;
            var v3912 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3911;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3912);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1687) : l112.fvalue(pv, 3, l4.value, l1327, l1687));
        return (function(){
            var v3913 = 1;
            var v3914 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3913;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3914);
        })();
    })());
    return (function(){
        var v3915 = 1;
        var v3916 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3915;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3916);
    })();
})();
var l1688 = make_lisp_string("(a b c)");
var l1689 = QIList(QIList(l1392,l1393,l1408,l5),7,l5);
var l1690 = make_lisp_string("<font color='orange'>Test `~S' passed unexpectedly!</font>~%");
var l1691 = QIList(l74,QIList(l89,QIList(l394,l1688,l5),l5),QIList(l389,l1689,l5),l5);
var l1692 = make_lisp_string("Test `~S' passed unexpectedly!~%");
var l1693 = make_lisp_string("Test `~S' failed failed expectedly.~%");
(function(){
    (l74.fvalue(pv, 2, (function(){
        var func = (function(){
            var symbol = l92;
            var func = symbol.fvalue;
            if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
            return func;
        })();
        var args = [pv, 0];
        return (function(){
            var values = mv;
            var vs;
            vs = l394.fvalue(values, 1, l1688);
            if (typeof vs === 'object' && 'multiple-value' in vs)
                args = args.concat(vs);
            else
                args.push(vs);
            args[1] = args.length-2;
            return func.apply(window, args);
        })();
    })(), l1689) !== l5.value ? (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1690, l1691) : l112.fvalue(pv, 3, l4.value, l1692, l1691));
        return (function(){
            var v3917 = 1;
            var v3918 = (function(){
                var x1 = (function(){
                    var symbol = l1317;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3917;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1317).value = v3918);
        })();
    })() : (function(){
        l112.fvalue(pv, 3, l4.value, l1693, l1691);
        return (function(){
            var v3919 = 1;
            var v3920 = (function(){
                var x1 = (function(){
                    var symbol = l1316;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3919;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1316).value = v3920);
        })();
    })());
    return (function(){
        var v3921 = 1;
        var v3922 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3921;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3922);
    })();
})();
var l1694 = make_lisp_string("cl:cond");
var l1695 = make_lisp_string("COND");
var l1696 = QIList(l74,QIList(l1009,QIList(l394,l1694,l5),l5),l1695,l5);
(function(){
    (l74.fvalue(pv, 2, (l394.fvalue(pv, 1, l1694)).name, l1695) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1696);
        return (function(){
            var v3923 = 1;
            var v3924 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3923;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3924);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1696) : l112.fvalue(pv, 3, l4.value, l1327, l1696));
        return (function(){
            var v3925 = 1;
            var v3926 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3925;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3926);
        })();
    })());
    return (function(){
        var v3927 = 1;
        var v3928 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3927;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3928);
    })();
})();
var l1697 = make_lisp_string("co|N|d");
var l1698 = make_lisp_string("COND");
var l1699 = QIList(l74,QIList(l1009,QIList(l394,l1697,l5),l5),l1698,l5);
(function(){
    (l74.fvalue(pv, 2, (l394.fvalue(pv, 1, l1697)).name, l1698) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1699);
        return (function(){
            var v3929 = 1;
            var v3930 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3929;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3930);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1699) : l112.fvalue(pv, 3, l4.value, l1327, l1699));
        return (function(){
            var v3931 = 1;
            var v3932 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3931;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3932);
        })();
    })());
    return (function(){
        var v3933 = 1;
        var v3934 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3933;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3934);
    })();
})();
var l1700 = make_lisp_string("abc\\def");
var l1701 = make_lisp_string("ABCdEF");
var l1702 = QIList(l74,QIList(l1009,QIList(l394,l1700,l5),l5),l1701,l5);
(function(){
    (l74.fvalue(pv, 2, (l394.fvalue(pv, 1, l1700)).name, l1701) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1702);
        return (function(){
            var v3935 = 1;
            var v3936 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3935;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3936);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1702) : l112.fvalue(pv, 3, l4.value, l1327, l1702));
        return (function(){
            var v3937 = 1;
            var v3938 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3937;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3938);
        })();
    })());
    return (function(){
        var v3939 = 1;
        var v3940 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3939;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3940);
    })();
})();
var l1703 = make_lisp_string("|.|");
var l1704 = make_lisp_string(".");
var l1705 = QIList(l74,QIList(l1009,QIList(l394,l1703,l5),l5),l1704,l5);
(function(){
    (l74.fvalue(pv, 2, (l394.fvalue(pv, 1, l1703)).name, l1704) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1705);
        return (function(){
            var v3941 = 1;
            var v3942 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3941;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3942);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1705) : l112.fvalue(pv, 3, l4.value, l1327, l1705));
        return (function(){
            var v3943 = 1;
            var v3944 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3943;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3944);
        })();
    })());
    return (function(){
        var v3945 = 1;
        var v3946 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3945;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3946);
    })();
})();
var l1706 = make_lisp_string("(1 .25)");
var l1707 = QIList(1,0.25,l5);
var l1708 = QIList(l74,QIList(l394,l1706,l5),QIList(l389,l1707,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l394.fvalue(pv, 1, l1706), l1707) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1708);
        return (function(){
            var v3947 = 1;
            var v3948 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3947;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3948);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1708) : l112.fvalue(pv, 3, l4.value, l1327, l1708));
        return (function(){
            var v3949 = 1;
            var v3950 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3949;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3950);
        })();
    })());
    return (function(){
        var v3951 = 1;
        var v3952 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3951;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3952);
    })();
})();
var l1709 = make_lisp_string(".25");
var l1710 = QIList(l74,QIList(l394,l1709,l5),0.25,l5);
(function(){
    (l74.fvalue(pv, 2, l394.fvalue(pv, 1, l1709), 0.25) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1710);
        return (function(){
            var v3953 = 1;
            var v3954 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3953;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3954);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1710) : l112.fvalue(pv, 3, l4.value, l1327, l1710));
        return (function(){
            var v3955 = 1;
            var v3956 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3955;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3956);
        })();
    })());
    return (function(){
        var v3957 = 1;
        var v3958 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3957;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3958);
    })();
})();
var l1711 = make_lisp_string("(1 . 25)");
var l1712 = QIList(1,25);
var l1713 = QIList(l74,QIList(l394,l1711,l5),QIList(l389,l1712,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l394.fvalue(pv, 1, l1711), l1712) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1713);
        return (function(){
            var v3959 = 1;
            var v3960 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3959;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3960);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1713) : l112.fvalue(pv, 3, l4.value, l1327, l1713));
        return (function(){
            var v3961 = 1;
            var v3962 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3961;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3962);
        })();
    })());
    return (function(){
        var v3963 = 1;
        var v3964 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3963;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3964);
    })();
})();
var l1714 = make_lisp_string("(#1=99 2 3 #1#)");
var l1715 = QIList(99,2,3,99,l5);
var l1716 = QIList(l74,QIList(l394,l1714,l5),QIList(l389,l1715,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l394.fvalue(pv, 1, l1714), l1715) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1716);
        return (function(){
            var v3965 = 1;
            var v3966 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3965;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3966);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1716) : l112.fvalue(pv, 3, l4.value, l1327, l1716));
        return (function(){
            var v3967 = 1;
            var v3968 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3967;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3968);
        })();
    })());
    return (function(){
        var v3969 = 1;
        var v3970 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3969;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3970);
    })();
})();
var l1717 = make_lisp_string("#(#1=99 2 3 #1#)");
var l1718 = (new Symbol(make_lisp_string("V")));
var l1719 = QIList(l37,QIList(l27,QIList(l1167,l1718,0,l5),99,l5),QIList(l27,QIList(l1167,l1718,1,l5),2,l5),QIList(l27,QIList(l1167,l1718,2,l5),3,l5),QIList(l27,QIList(l1167,l1718,3,l5),99,l5),l5);
(function(v3971){
    return (function(){
        ((l27.fvalue(pv, 2, (function(){
            var x = (v3971)[0];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 99) !== l5.value ? (l27.fvalue(pv, 2, (function(){
            var x = (v3971)[1];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 2) !== l5.value ? (l27.fvalue(pv, 2, (function(){
            var x = (v3971)[2];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 3) !== l5.value ? l27.fvalue(pv, 2, (function(){
            var x = (v3971)[3];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 99) : l5.value) : l5.value) : l5.value) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1719);
            return (function(){
                var v3972 = 1;
                var v3973 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3972;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v3973);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1719) : l112.fvalue(pv, 3, l4.value, l1327, l1719));
            return (function(){
                var v3974 = 1;
                var v3975 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v3974;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v3975);
            })();
        })());
        return (function(){
            var v3976 = 1;
            var v3977 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3976;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v3977);
        })();
    })();
})(l394.fvalue(pv, 1, l1717));
var l1720 = make_lisp_string("#1=(42 . #1#)");
var l1721 = QIList(l725,QIList(QIList(l1245,QIList(l394,l1720,l5),l5),l5),QIList(l37,QIList(l27,QIList(l151,99,l1245,l5),42,l5),QIList(l196,QIList(l197,l1245,13,l5),QIList(l27,QIList(l151,99,l1245,l5),13,l5),l5),QIList(l1039,l1245,QIList(l132,l1245,l5),l5),l5),l5);
(function(){
    ((function(v3978){
        return (l27.fvalue(pv, 2, l151.fvalue(pv, 2, 99, v3978), 42) !== l5.value ? ((function(){
            (function(){
                var x = v3978;
                if (typeof x != 'object')
                    throw 'The value ' + x + ' is not a type object.';
                return (x.car = 13, x);
            })();
            return l27.fvalue(pv, 2, l151.fvalue(pv, 2, 99, v3978), 13);
        })() !== l5.value ? ((v3978 === (function(){
            var tmp = v3978;
            return tmp === l5.value? l5.value: tmp.cdr;
        })())?l4.value: l5.value) : l5.value) : l5.value);
    })(l394.fvalue(pv, 1, l1720)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1721);
        return (function(){
            var v3979 = 1;
            var v3980 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3979;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3980);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1721) : l112.fvalue(pv, 3, l4.value, l1327, l1721));
        return (function(){
            var v3981 = 1;
            var v3982 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3981;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3982);
        })();
    })());
    return (function(){
        var v3983 = 1;
        var v3984 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3983;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3984);
    })();
})();
var l1722 = make_lisp_string("#1=#(1 #2=99 #1# #2#)");
var l1723 = QIList(l725,QIList(QIList(l1245,QIList(l394,l1722,l5),l5),l5),QIList(l37,QIList(l27,QIList(l1167,l1245,0,l5),1,l5),QIList(l27,QIList(l1167,l1245,1,l5),99,l5),QIList(l1039,QIList(l1167,l1245,2,l5),l1245,l5),QIList(l27,QIList(l1167,l1245,3,l5),99,l5),l5),l5);
(function(){
    ((function(v3985){
        return (l27.fvalue(pv, 2, (function(){
            var x = (v3985)[0];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 1) !== l5.value ? (l27.fvalue(pv, 2, (function(){
            var x = (v3985)[1];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 99) !== l5.value ? ((((function(){
            var x = (v3985)[2];
            if (x === undefined) throw 'Out of range';
            return x;
        })() === v3985)?l4.value: l5.value) !== l5.value ? l27.fvalue(pv, 2, (function(){
            var x = (v3985)[3];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 99) : l5.value) : l5.value) : l5.value);
    })(l394.fvalue(pv, 1, l1722)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1723);
        return (function(){
            var v3986 = 1;
            var v3987 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3986;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3987);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1723) : l112.fvalue(pv, 3, l4.value, l1327, l1723));
        return (function(){
            var v3988 = 1;
            var v3989 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3988;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3989);
        })();
    })());
    return (function(){
        var v3990 = 1;
        var v3991 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3990;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3991);
    })();
})();
var l1724 = make_lisp_string("#1=(1 2 #2=#(3 4 #1#) 5 #2#)");
var l1725 = QIList(l725,QIList(QIList(l1245,QIList(l394,l1724,l5),l5),l5),QIList(l37,QIList(l27,QIList(l151,0,l1245,l5),1,l5),QIList(l27,QIList(l151,1,l1245,l5),2,l5),QIList(l27,QIList(l1167,QIList(l151,2,l1245,l5),0,l5),3,l5),QIList(l27,QIList(l1167,QIList(l151,2,l1245,l5),1,l5),4,l5),QIList(l1039,QIList(l1167,QIList(l151,2,l1245,l5),2,l5),l1245,l5),QIList(l27,QIList(l151,3,l1245,l5),5,l5),QIList(l1039,QIList(l151,4,l1245,l5),QIList(l151,2,l1245,l5),l5),l5),l5);
(function(){
    ((function(v3992){
        return (l27.fvalue(pv, 2, l151.fvalue(pv, 2, 0, v3992), 1) !== l5.value ? (l27.fvalue(pv, 2, l151.fvalue(pv, 2, 1, v3992), 2) !== l5.value ? (l27.fvalue(pv, 2, (function(){
            var x = (l151.fvalue(pv, 2, 2, v3992))[0];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 3) !== l5.value ? (l27.fvalue(pv, 2, (function(){
            var x = (l151.fvalue(pv, 2, 2, v3992))[1];
            if (x === undefined) throw 'Out of range';
            return x;
        })(), 4) !== l5.value ? ((((function(){
            var x = (l151.fvalue(pv, 2, 2, v3992))[2];
            if (x === undefined) throw 'Out of range';
            return x;
        })() === v3992)?l4.value: l5.value) !== l5.value ? (l27.fvalue(pv, 2, l151.fvalue(pv, 2, 3, v3992), 5) !== l5.value ? ((l151.fvalue(pv, 2, 4, v3992) === l151.fvalue(pv, 2, 2, v3992))?l4.value: l5.value) : l5.value) : l5.value) : l5.value) : l5.value) : l5.value) : l5.value);
    })(l394.fvalue(pv, 1, l1724)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1725);
        return (function(){
            var v3993 = 1;
            var v3994 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3993;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v3994);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1725) : l112.fvalue(pv, 3, l4.value, l1327, l1725));
        return (function(){
            var v3995 = 1;
            var v3996 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3995;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v3996);
        })();
    })());
    return (function(){
        var v3997 = 1;
        var v3998 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v3997;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v3998);
    })();
})();
var l1726 = [2, 1, 3];
var l1727 = QIList(l210,1,l1726,l5);
(function(){
    (l210.fvalue(pv, 2, 1, l1726) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1727);
        return (function(){
            var v3999 = 1;
            var v4000 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v3999;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4000);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1727) : l112.fvalue(pv, 3, l4.value, l1327, l1727));
        return (function(){
            var v4001 = 1;
            var v4002 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4001;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4002);
        })();
    })());
    return (function(){
        var v4003 = 1;
        var v4004 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4003;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4004);
    })();
})();
var l1728 = [2, 2, 2];
var l1729 = QIList(l28,QIList(l210,1,l1728,l5),l5);
(function(){
    (l28.fvalue(pv, 1, l210.fvalue(pv, 2, 1, l1728)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1729);
        return (function(){
            var v4005 = 1;
            var v4006 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4005;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4006);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1729) : l112.fvalue(pv, 3, l4.value, l1327, l1729));
        return (function(){
            var v4007 = 1;
            var v4008 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4007;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4008);
        })();
    })());
    return (function(){
        var v4009 = 1;
        var v4010 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4009;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4010);
    })();
})();
var l1730 = [1, 2, 3, 1];
var l1731 = QIList(l28,QIList(l210,1,QIList(l214,1,l1730,l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, l210.fvalue(pv, 2, 1, l214.fvalue(pv, 2, 1, l1730))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1731);
        return (function(){
            var v4011 = 1;
            var v4012 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4011;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4012);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1731) : l112.fvalue(pv, 3, l4.value, l1327, l1731));
        return (function(){
            var v4013 = 1;
            var v4014 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4013;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4014);
        })();
    })());
    return (function(){
        var v4015 = 1;
        var v4016 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4015;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4016);
    })();
})();
var l1732 = QIList(l210,1,QIList(l92,2,1,3,l5),l5);
(function(){
    (l210.fvalue(pv, 2, 1, l92.fvalue(pv, 3, 2, 1, 3)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1732);
        return (function(){
            var v4017 = 1;
            var v4018 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4017;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4018);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1732) : l112.fvalue(pv, 3, l4.value, l1327, l1732));
        return (function(){
            var v4019 = 1;
            var v4020 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4019;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4020);
        })();
    })());
    return (function(){
        var v4021 = 1;
        var v4022 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4021;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4022);
    })();
})();
var l1733 = QIList(l28,QIList(l210,1,QIList(l92,2,2,2,l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, l210.fvalue(pv, 2, 1, l92.fvalue(pv, 3, 2, 2, 2))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1733);
        return (function(){
            var v4023 = 1;
            var v4024 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4023;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4024);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1733) : l112.fvalue(pv, 3, l4.value, l1327, l1733));
        return (function(){
            var v4025 = 1;
            var v4026 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4025;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4026);
        })();
    })());
    return (function(){
        var v4027 = 1;
        var v4028 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4027;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4028);
    })();
})();
var l1734 = QIList(l28,QIList(l210,1,QIList(l214,1,QIList(l92,1,2,3,1,l5),l5),l5),l5);
(function(){
    (l28.fvalue(pv, 1, l210.fvalue(pv, 2, 1, l214.fvalue(pv, 2, 1, l92.fvalue(pv, 4, 1, 2, 3, 1)))) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1734);
        return (function(){
            var v4029 = 1;
            var v4030 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4029;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4030);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1734) : l112.fvalue(pv, 3, l4.value, l1327, l1734));
        return (function(){
            var v4031 = 1;
            var v4032 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4031;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4032);
        })();
    })());
    return (function(){
        var v4033 = 1;
        var v4034 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4033;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4034);
    })();
})();
var l1735 = QIList(1,0,2,0,3,l5);
var l1736 = QIList(1,2,3,l5);
var l1737 = QIList(l74,QIList(l216,QIList(l82,l25,l5),QIList(l389,l1735,l5),l5),QIList(l389,l1736,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l216.fvalue(pv, 2, (function(){
        var symbol = l25;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })(), l1735), l1736) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1737);
        return (function(){
            var v4035 = 1;
            var v4036 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4035;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4036);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1737) : l112.fvalue(pv, 3, l4.value, l1327, l1737));
        return (function(){
            var v4037 = 1;
            var v4038 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4037;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4038);
        })();
    })());
    return (function(){
        var v4039 = 1;
        var v4040 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4039;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4040);
    })();
})();
var l1738 = QIList(1,0,2,0,3,l5);
var l1739 = QIList(0,0,l5);
var l1740 = QIList(l74,QIList(l219,QIList(l82,l25,l5),QIList(l389,l1738,l5),l5),QIList(l389,l1739,l5),l5);
(function(){
    (l74.fvalue(pv, 2, l219.fvalue(pv, 2, (function(){
        var symbol = l25;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })(), l1738), l1739) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1740);
        return (function(){
            var v4041 = 1;
            var v4042 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4041;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4042);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1740) : l112.fvalue(pv, 3, l4.value, l1327, l1740));
        return (function(){
            var v4043 = 1;
            var v4044 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4043;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4044);
        })();
    })());
    return (function(){
        var v4045 = 1;
        var v4046 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4045;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4046);
    })();
})();
var l1741 = [1, 0, 2, 0, 3];
var l1742 = (new Symbol(make_lisp_string("V1")));
var l1743 = QIList(l37,QIList(l20,QIList(l1167,l1742,0,l5),1,l5),QIList(l20,QIList(l1167,l1742,1,l5),2,l5),QIList(l20,QIList(l1167,l1742,2,l5),3,l5),l5);
(function(v4047){
    return (function(){
        (((function(){
            var x1 = (function(){
                var x = (v4047)[0];
                if (x === undefined) throw 'Out of range';
                return x;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==1?l4.value: l5.value);
        })() !== l5.value ? ((function(){
            var x1 = (function(){
                var x = (v4047)[1];
                if (x === undefined) throw 'Out of range';
                return x;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==2?l4.value: l5.value);
        })() !== l5.value ? (function(){
            var x1 = (function(){
                var x = (v4047)[2];
                if (x === undefined) throw 'Out of range';
                return x;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            return (x1==3?l4.value: l5.value);
        })() : l5.value) : l5.value) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1743);
            return (function(){
                var v4048 = 1;
                var v4049 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4048;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v4049);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1743) : l112.fvalue(pv, 3, l4.value, l1327, l1743));
            return (function(){
                var v4050 = 1;
                var v4051 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4050;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v4051);
            })();
        })());
        return (function(){
            var v4052 = 1;
            var v4053 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4052;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v4053);
        })();
    })();
})(l216.fvalue(pv, 2, (function(){
    var symbol = l25;
    var func = symbol.fvalue;
    if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
    return func;
})(), l1741));
var l1744 = [1, 0, 2, 0, 3];
var l1745 = QIList(l215,QIList(l82,l25,l5),QIList(l219,QIList(l82,l25,l5),l1744,l5),l5);
(function(){
    (l215.fvalue(pv, 2, (function(){
        var symbol = l25;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })(), l219.fvalue(pv, 2, (function(){
        var symbol = l25;
        var func = symbol.fvalue;
        if (func === undefined) throw "Function `" + xstring(symbol.name) + "' is undefined.";
        return func;
    })(), l1744)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1745);
        return (function(){
            var v4054 = 1;
            var v4055 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4054;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4055);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1745) : l112.fvalue(pv, 3, l4.value, l1327, l1745));
        return (function(){
            var v4056 = 1;
            var v4057 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4056;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4057);
        })();
    })());
    return (function(){
        var v4058 = 1;
        var v4059 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4058;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4059);
    })();
})();
var l1746 = QIList(1,2,3,4,5,l5);
var l1747 = QIList(4,5,l5);
var l1748 = QIList(l74,QIList(l220,l1572,3,l5),QIList(l389,l1747,l5),l5);
var l1749 = QIList(3,4,l5);
var l1750 = QIList(l74,QIList(l220,l1572,2,4,l5),QIList(l389,l1749,l5),l5);
var l1751 = QIList(1,2,3,4,5,l5);
var l1752 = QIList(l74,l1572,QIList(l389,l1751,l5),l5);
(function(v4060){
    (function(){
        (l74.fvalue(pv, 2, l220.fvalue(pv, 2, v4060, 3), l1747) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1748);
            return (function(){
                var v4061 = 1;
                var v4062 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4061;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v4062);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1748) : l112.fvalue(pv, 3, l4.value, l1327, l1748));
            return (function(){
                var v4063 = 1;
                var v4064 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4063;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v4064);
            })();
        })());
        return (function(){
            var v4065 = 1;
            var v4066 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4065;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v4066);
        })();
    })();
    (function(){
        (l74.fvalue(pv, 2, l220.fvalue(pv, 3, v4060, 2, 4), l1749) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1750);
            return (function(){
                var v4067 = 1;
                var v4068 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4067;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v4068);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1750) : l112.fvalue(pv, 3, l4.value, l1327, l1750));
            return (function(){
                var v4069 = 1;
                var v4070 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4069;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v4070);
            })();
        })());
        return (function(){
            var v4071 = 1;
            var v4072 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4071;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v4072);
        })();
    })();
    return (function(){
        (l74.fvalue(pv, 2, v4060, l1751) !== l5.value ? (function(){
            l112.fvalue(pv, 3, l4.value, l1324, l1752);
            return (function(){
                var v4073 = 1;
                var v4074 = (function(){
                    var x1 = (function(){
                        var symbol = l1314;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4073;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1314).value = v4074);
            })();
        })() : (function(){
            ((function(){
                var symbol = l1318;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1752) : l112.fvalue(pv, 3, l4.value, l1327, l1752));
            return (function(){
                var v4075 = 1;
                var v4076 = (function(){
                    var x1 = (function(){
                        var symbol = l1315;
                        var value = symbol.value;
                        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                        return value;
                    })();
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4075;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return ((l1315).value = v4076);
            })();
        })());
        return (function(){
            var v4077 = 1;
            var v4078 = (function(){
                var x1 = (function(){
                    var symbol = l1313;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4077;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1313).value = v4078);
        })();
    })();
})(l1746);
var l1753 = QIList(l20,2,QIList(l725,QIList(QIList(l1245,0,l5),l5),QIList(l29,l1245,QIList(l98,l1245,1,l5),l5),l1245,l5),l5);
(function(){
    ((function(){
        var x1 = (function(v4079){
            (function(){
                var v4080 = (function(){
                    return (function(){
                        var func = (function (values,nargs,v4082){
                            switch(nargs){
                            case 0:
                                v4082=l5.value;
                            default: break;
                            }
                            var v4081= l5.value;
                            for (var i = nargs-1; i>=1; i--)
                                v4081 = {car: arguments[i+2], cdr: v4081};
                            return (v4079 = v4082);
                        });
                        var args = [pv, 0];
                        return (function(){
                            var values = mv;
                            var vs;
                            vs = 1;
                            if (typeof vs === 'object' && 'multiple-value' in vs)
                                args = args.concat(vs);
                            else
                                args.push(vs);
                            args[1] = args.length-2;
                            return func.apply(window, args);
                        })();
                    })();
                })();
                var v4083 = (function(){
                    var x1 = v4079;
                    if (typeof x1 !== 'number') throw 'Not a number!';
                    var x2 = v4080;
                    if (typeof x2 !== 'number') throw 'Not a number!';
                    return x1+x2;
                })();
                return (v4079 = v4083);
            })();
            return v4079;
        })(0);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (2==x1?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1753);
        return (function(){
            var v4084 = 1;
            var v4085 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4084;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4085);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1753) : l112.fvalue(pv, 3, l4.value, l1327, l1753));
        return (function(){
            var v4086 = 1;
            var v4087 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4086;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4087);
        })();
    })());
    return (function(){
        var v4088 = 1;
        var v4089 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4088;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4089);
    })();
})();
var l1754 = (new Symbol(make_lisp_string("*STR*")));
var l1755 = make_lisp_string("hello world");
(function(){
    (((l1754.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l1754).value = l1755));
    return l1754;
})();
var l1756 = (new Symbol(make_lisp_string("*STR2*")));
var l1757 = make_lisp_string("h");
(function(){
    (((l1756.value !== undefined)?l4.value: l5.value) !== l5.value ? l5.value : ((l1756).value = l1757));
    return l1756;
})();
var l1758 = QIList(l204,l1754,l5);
(function(){
    (((function(){
        var x = (function(){
            var symbol = l1754;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
    })()?l4.value: l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1758);
        return (function(){
            var v4090 = 1;
            var v4091 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4090;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4091);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1758) : l112.fvalue(pv, 3, l4.value, l1327, l1758));
        return (function(){
            var v4092 = 1;
            var v4093 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4092;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4093);
        })();
    })());
    return (function(){
        var v4094 = 1;
        var v4095 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4094;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4095);
    })();
})();
var l1759 = QIList(l28,QIList(l1049,l1754,l5),l5);
(function(){
    (l28.fvalue(pv, 1, ((function(){
        var x = (function(){
            var symbol = l1754;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return (typeof((function(){
            var symbol = l1754;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()) == "string") && x.length == 1;
    })()?l4.value: l5.value)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1759);
        return (function(){
            var v4096 = 1;
            var v4097 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4096;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4097);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1759) : l112.fvalue(pv, 3, l4.value, l1327, l1759));
        return (function(){
            var v4098 = 1;
            var v4099 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4098;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4099);
        })();
    })());
    return (function(){
        var v4100 = 1;
        var v4101 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4100;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4101);
    })();
})();
var l1760 = QIList(l28,QIList(l65,l1754,l5),l5);
(function(){
    (l28.fvalue(pv, 1, l65.fvalue(pv, 1, (function(){
        var symbol = l1754;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })())) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1760);
        return (function(){
            var v4102 = 1;
            var v4103 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4102;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4103);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1760) : l112.fvalue(pv, 3, l4.value, l1327, l1760));
        return (function(){
            var v4104 = 1;
            var v4105 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4104;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4105);
        })();
    })());
    return (function(){
        var v4106 = 1;
        var v4107 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4106;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4107);
    })();
})();
var l1761 = QIList(l204,l1756,l5);
(function(){
    (((function(){
        var x = (function(){
            var symbol = l1756;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return typeof(x) == 'object' && 'length' in x && x.type == 'character';
    })()?l4.value: l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1761);
        return (function(){
            var v4108 = 1;
            var v4109 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4108;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4109);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1761) : l112.fvalue(pv, 3, l4.value, l1327, l1761));
        return (function(){
            var v4110 = 1;
            var v4111 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4110;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4111);
        })();
    })());
    return (function(){
        var v4112 = 1;
        var v4113 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4112;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4113);
    })();
})();
var l1762 = QIList(l28,QIList(l1049,l1756,l5),l5);
(function(){
    (l28.fvalue(pv, 1, ((function(){
        var x = (function(){
            var symbol = l1756;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        return (typeof((function(){
            var symbol = l1756;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })()) == "string") && x.length == 1;
    })()?l4.value: l5.value)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1762);
        return (function(){
            var v4114 = 1;
            var v4115 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4114;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4115);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1762) : l112.fvalue(pv, 3, l4.value, l1327, l1762));
        return (function(){
            var v4116 = 1;
            var v4117 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4116;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4117);
        })();
    })());
    return (function(){
        var v4118 = 1;
        var v4119 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4118;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4119);
    })();
})();
var l1763 = QIList(l28,QIList(l65,l1756,l5),l5);
(function(){
    (l28.fvalue(pv, 1, l65.fvalue(pv, 1, (function(){
        var symbol = l1756;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })())) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1763);
        return (function(){
            var v4120 = 1;
            var v4121 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4120;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4121);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1763) : l112.fvalue(pv, 3, l4.value, l1327, l1763));
        return (function(){
            var v4122 = 1;
            var v4123 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4122;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4123);
        })();
    })());
    return (function(){
        var v4124 = 1;
        var v4125 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4124;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4125);
    })();
})();
var l1764 = make_lisp_string("hello world");
var l1765 = QIList(l20,QIList(l54,l1764,l5),11,l5);
(function(){
    ((function(){
        var x1 = l54.fvalue(pv, 1, l1764);
        if (typeof x1 !== 'number') throw 'Not a number!';
        return (x1==11?l4.value: l5.value);
    })() !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1765);
        return (function(){
            var v4126 = 1;
            var v4127 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4126;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4127);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1765) : l112.fvalue(pv, 3, l4.value, l1327, l1765));
        return (function(){
            var v4128 = 1;
            var v4129 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4128;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4129);
        })();
    })());
    return (function(){
        var v4130 = 1;
        var v4131 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4130;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4131);
    })();
})();
var l1766 = make_lisp_string("hello world");
var l1767 = QIList(l1163,l1766,l5);
(function(){
    (((function(){
        var x = l1766;
        return typeof x === 'object' && 'length' in x;
    })()?l4.value: l5.value) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1767);
        return (function(){
            var v4132 = 1;
            var v4133 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4132;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4133);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1767) : l112.fvalue(pv, 3, l4.value, l1327, l1767));
        return (function(){
            var v4134 = 1;
            var v4135 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4134;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4135);
        })();
    })());
    return (function(){
        var v4136 = 1;
        var v4137 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4136;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4137);
    })();
})();
var l1768 = make_lisp_string("h");
var l1769 = QIList(l75,l1768,QIList(l125,"h",l5),l5);
(function(){
    (l75.fvalue(pv, 2, l1768, l125.fvalue(pv, 1, "h")) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1769);
        return (function(){
            var v4138 = 1;
            var v4139 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4138;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4139);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1769) : l112.fvalue(pv, 3, l4.value, l1327, l1769));
        return (function(){
            var v4140 = 1;
            var v4141 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4140;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4141);
        })();
    })());
    return (function(){
        var v4142 = 1;
        var v4143 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4142;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4143);
    })();
})();
var l1770 = make_lisp_string("foo");
var l1771 = make_lisp_string("foo");
var l1772 = QIList(l75,l1770,l1771,l5);
(function(){
    (l75.fvalue(pv, 2, l1770, l1771) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1772);
        return (function(){
            var v4144 = 1;
            var v4145 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4144;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4145);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1772) : l112.fvalue(pv, 3, l4.value, l1327, l1772));
        return (function(){
            var v4146 = 1;
            var v4147 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4146;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4147);
        })();
    })());
    return (function(){
        var v4148 = 1;
        var v4149 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4148;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4149);
    })();
})();
var l1773 = make_lisp_string("Foo");
var l1774 = make_lisp_string("foo");
var l1775 = QIList(l28,QIList(l75,l1773,l1774,l5),l5);
(function(){
    (l28.fvalue(pv, 1, l75.fvalue(pv, 2, l1773, l1774)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1775);
        return (function(){
            var v4150 = 1;
            var v4151 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4150;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4151);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1775) : l112.fvalue(pv, 3, l4.value, l1327, l1775));
        return (function(){
            var v4152 = 1;
            var v4153 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4152;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4153);
        })();
    })());
    return (function(){
        var v4154 = 1;
        var v4155 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4154;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4155);
    })();
})();
var l1776 = make_lisp_string("foo");
var l1777 = make_lisp_string("foox");
var l1778 = QIList(l28,QIList(l75,l1776,l1777,l5),l5);
(function(){
    (l28.fvalue(pv, 1, l75.fvalue(pv, 2, l1776, l1777)) !== l5.value ? (function(){
        l112.fvalue(pv, 3, l4.value, l1324, l1778);
        return (function(){
            var v4156 = 1;
            var v4157 = (function(){
                var x1 = (function(){
                    var symbol = l1314;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4156;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1314).value = v4157);
        })();
    })() : (function(){
        ((function(){
            var symbol = l1318;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1326, l1778) : l112.fvalue(pv, 3, l4.value, l1327, l1778));
        return (function(){
            var v4158 = 1;
            var v4159 = (function(){
                var x1 = (function(){
                    var symbol = l1315;
                    var value = symbol.value;
                    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                    return value;
                })();
                if (typeof x1 !== 'number') throw 'Not a number!';
                var x2 = v4158;
                if (typeof x2 !== 'number') throw 'Not a number!';
                return x1+x2;
            })();
            return ((l1315).value = v4159);
        })();
    })());
    return (function(){
        var v4160 = 1;
        var v4161 = (function(){
            var x1 = (function(){
                var symbol = l1313;
                var value = symbol.value;
                if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
                return value;
            })();
            if (typeof x1 !== 'number') throw 'Not a number!';
            var x2 = v4160;
            if (typeof x2 !== 'number') throw 'Not a number!';
            return x1+x2;
        })();
        return ((l1313).value = v4161);
    })();
})();
var l1779 = make_lisp_string("~%Finished. The execution took ~a seconds.~%");
l112.fvalue(pv, 3, l4.value, l1779, (function(){
    var x1 = (function(){
        var x1 = (new Date()).getTime();
        if (typeof x1 !== 'number') throw 'Not a number!';
        var x2 = (function(){
            var symbol = l1319;
            var value = symbol.value;
            if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
            return value;
        })();
        if (typeof x2 !== 'number') throw 'Not a number!';
        return x1-x2;
    })();
    if (typeof x1 !== 'number') throw 'Not a number!';
    var x2 = l103.value;
    if (typeof x2 !== 'number') throw 'Not a number!';
    return x1/x2/1.0;
})());
var l1780 = make_lisp_string("All the tests (~a) passed successfully.~%");
var l1781 = make_lisp_string("~a/~a test(s) passed successfully.~%");
((function(){
    var x1 = (function(){
        var symbol = l1314;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })();
    if (typeof x1 !== 'number') throw 'Not a number!';
    var x2 = (function(){
        var symbol = l1313;
        var value = symbol.value;
        if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
        return value;
    })();
    if (typeof x2 !== 'number') throw 'Not a number!';
    return (x1==x2?l4.value: l5.value);
})() !== l5.value ? l112.fvalue(pv, 3, l4.value, l1780, (function(){
    var symbol = l1313;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()) : l112.fvalue(pv, 4, l4.value, l1781, (function(){
    var symbol = l1314;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})(), (function(){
    var symbol = l1313;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()));
var l1782 = make_lisp_string("~a test(s) failed expectedly.~%");
(l25.fvalue(pv, 1, (function(){
    var symbol = l1316;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()) !== l5.value ? l5.value : l112.fvalue(pv, 3, l4.value, l1782, (function(){
    var symbol = l1316;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()));
var l1783 = make_lisp_string("~a test(s) passed unexpectedly.~%");
(l25.fvalue(pv, 1, (function(){
    var symbol = l1317;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()) !== l5.value ? l5.value : l112.fvalue(pv, 3, l4.value, l1783, (function(){
    var symbol = l1317;
    var value = symbol.value;
    if (value === undefined) throw "Variable `" + xstring(symbol.name) + "' is unbound.";
    return value;
})()));
