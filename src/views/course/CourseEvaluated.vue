<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <h3>课程评价</h3>
      </div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="课程编号" width="180" />
        <el-table-column prop="name" label="课程名称" width="180" />
        <el-table-column prop="price" label="课程价格 ( 元 )" width="180" />
        <el-table-column prop="teacherName" label="课程教师" width="180" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleClickEvaluate(scope.row.id)"
              >评价</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="课程评价" :visible.sync="open" width="30%">
      <span>课程评级</span>
      <el-rate v-model="evaluatedData.rating" :colors="colors"> </el-rate>
      <br />
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入评价"
        v-model="evaluatedData.suggetion">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { queryCourse } from "@/api/sign";
import { add } from "@/api/questionnair";
import { decryptData } from "@/utils/crypto";

export default {
  data() {
    return {
      open: false,
      evaluatedData: {
        courseid: null,
        studentid: null,
        rating: 0,
        suggetion: "",
      },
      tableData: [],
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  methods: {
    handleClickEvaluate(courseid) {
      this.open = true;
      this.evaluatedData.courseid = courseid;
    },
    handleCancel() {
      this.evaluatedData = {
        ...this.evaluatedData,
        courseid: null,
        rating: 0,
        suggetion: "",
      };
      this.open = false;
    },
    handleConfirm() {
      add({ ...this.evaluatedData })
        .then((res) => {
          if (res.success) {
            this.$message.success("评价成功");
            this.evaluatedData = {
              ...this.evaluatedData,
              courseid: null,
              rating: 0,
              suggetion: "",
            };
            this.handleSearch();
            this.open = false;
          } else {
            this.$message.error("评价失败");
          }
        })
        .catch((e) => {
          console.log(e);
          this.$message.error("网络出现问题");
        });
    },
    handleSearch() {
      queryCourse({ studentId: this.evaluatedData.studentid, status: 0 }).then(
        (res) => {
          if (res.success) {
            this.tableData = [...res.data];
          }
        }
      );
    },
  },
  mounted() {
    const { id } = decryptData();
    if (!id) {
      this.$message.error("缺少必要参数, 请重新登录");
      return;
    }
    this.evaluatedData.studentid = id;
    this.handleSearch();
  },
};
</script>

<style lang="scss" scoped></style>
