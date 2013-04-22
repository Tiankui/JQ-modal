### 调用方法

引入modal.less,modal-layout.less jquery jquery-modal  
设定modal(580px,570px);(less函数设定modal外层宽度)  
调用代码

    <a id="J_addFriends_btn" href="#J_addFriends_box">modal</a>
    <div id="J_addFriends_box" style="display:none;">
      <div class="shadow"></div>
      <div class="wrapper">
        <div class="title">
          <span>添加导航</span>
          <span class="small">(导航最多可添加5个)</span>
        </div>
        <div class="modal-footer">
          <a id="J_quickMenu_submit" class="modal-submit" href="#">确认添加</a>
        </div>
      </div>
    </div>

    
modifier:[Tiankui](http://github.com/tiankui "tiankui-git")
