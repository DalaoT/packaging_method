    //页面加载完执行事件
    window.onload = (e) => {  //vue中这里改为 created 生命周期
      var code = "";
      var lastTime, nextTime;
      var lastCode, nextCode;
      //用户按下按键执行
      document.onkeydown = (e) => {

        // 保存按键码
        nextCode = e.which;

        // 设置跳过的特殊字段
        if (nextCode == 16) {
          return
        }

        //保存按键时间
        nextTime = new Date().getTime();
        // 如果按键码不为空 且 上一次按键码也不为空 且 两次按键激活时间小等于30毫秒 且不为特殊值
        if (lastCode != null && lastTime != null && nextTime - lastTime <= 30) {
          // code值加上当前按下的值并保存
          code += lastCode;
          console.log(lastCode);
          // 如果两次按键激活时间大于100毫秒
        } else if (lastCode != null && lastTime != null && nextTime - lastTime > 100) {
          // 清除code值
          code = "";
        }
        // 保存这次按键码
        lastCode = e.key;
        // 保存这次按键时间
        lastTime = nextTime;
        //如果用户按下回车
        if (e.which == 13) {
          // 如果当前保存的值大于2位
          if (code.length < 2) {
            //手动输入的时间不会让code的长度大于2，所以这里只会对扫码枪有效
            //返回false
            return false;
          }
          this.kdnum = code //要更改的值变成扫码枪的值 this.queryCondition.kdnum可以改成需要更改的值
          this.readingData(code) //我自己的方法
          code = ""; //清空值
        }
      }
    }
