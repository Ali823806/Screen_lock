var e = document.getElementById('lock')
var p = PatternLock(e, {
    onPattern:function(){
        this.success()
    }
})