<template>
  <div class="app-footer">
    <div class="tubiao">
      <div>
        <i class="iconfont icon-bao"></i>
        <div>全国联保</div>
      </div>
      <div>
        <i class="iconfont icon-qitianwuliyoutuihuan"></i>
        <div>七天无理由</div>
      </div>
      <div>
        <i class="iconfont icon-tianmaoshunfengbaoyou"></i>
        <div>顺丰包邮</div>
      </div>
      <div>
        <i class="iconfont icon-guanwang"></i>
        <div>官方退换货保障</div>
      </div>
    </div>
    <div class="content">
      <table>
        <tr>
          <th>OPPO</th>
          <th>一加</th>
          <th>智能硬件</th>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>

        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
        <tr>
          <td>OPPO Find X5 PRO</td>
          <td>一加ACE</td>
          <td>OPPO手环2</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      <div class="cont">
        2022-2029 OPPO 版权所有ICP备案号123456 |隐私政策 |用户协议 |知识产权
      </div>
      <div class="cont">公安网备案号 555662189856号</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.app-footer {
  padding: 0px 30px;
  background-color: rgb(252, 252, 252);
  .tubiao {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    div {
      flex: 1;
    }
    .iconfont {
      font-size: 65px;
    }
  }
  .content {
    border-top: 1px black solid;
    border-bottom: 1px black solid;
    margin-top: 30px;
    color: gray;
    font-size: 12px;
    table {
      td {
        text-align: left;
      }
      th {
        margin-right: 20px;
      }
    }
  }
  .footer {
    margin-top: 30px;
    font-size: 12px;
    color: gray;
    .cont {
      margin-bottom: 20px;
    }
  }
}
</style>
