<template>
  <div class="training-home">
    <!-- 头部区域 -->
    <header class="header">
      <div class="logo">浩奇公司课程培训</div>
    </header>

    <!-- 中上部分图片轮播 -->
    <el-carousel height="300px">
      <el-carousel-item v-for="item in carouselItems" :key="item.id">
        <img :src="item.imgSrc" alt="轮播图" />
      </el-carousel-item>
    </el-carousel>

    <!-- 中部卡片区域 -->
    <div class="card-container">
      <el-card class="card">
        <div slot="header" class="card-header">最新课程</div>
        <div class="card-content">
          <p>Java基础课程</p>
          <p>Vue技术实战</p>
          <p>前端开发入门</p>
          <p>数据库管理</p>
        </div>
      </el-card>
      <div class="info-card">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="info-item">
              <el-statistic
                group-separator=","
                decimal-separator="."
                title="合作公司">
                <template slot="formatter">
                  {{ data.CompanyNum ?? "" }}
                </template>
              </el-statistic>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="info-item">
              <el-statistic title="课程数量">
                <template slot="formatter">
                  {{ data.CourseNum ?? "" }}
                </template>
              </el-statistic>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="info-item">
              <el-statistic title="讲师数量">
                <template slot="formatter">
                  {{ data.TeacherNum ?? "" }}
                </template>
              </el-statistic>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="info-item">
              <el-statistic title="学员数量">
                <template slot="formatter">
                  {{ data.StudentNum ?? "" }}
                </template>
              </el-statistic>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <el-card class="card">
        <div slot="header" class="card-header">立即加入</div>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2em;
          ">
          <div>
            <el-button
              type="primary"
              style="width: 200px"
              @click="$router.push('/studentLogin')"
              >学员登录</el-button
            >
          </div>
          <div>
            <el-button
              type="primary"
              style="width: 200px"
              @click="$router.push('/courseApplication')"
              >课程申请</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { query } from "@/api/dashboard";

import slide1 from "@/assets/slideshow/slide1.jpg";

export default {
  data() {
    return {
      carouselItems: [
        { id: 1, imgSrc: slide1 },
        { id: 2, imgSrc: slide1 },
        // 添加更多轮播项
      ],
      data: {
        CompanyNum: "",
        StudentNum: "",
        TeacherNum: "",
        TotalMoney: "",
        CourseNum: "",
      },
    };
  },
  mounted() {
    query()
      .then((res) => {
        if (res.success) {
          this.data = { ...res.data };
        } else {
          throw new Error("无法获取数据");
        }
      })
      .catch((e) => {
        this.$message.error("无法获取数据");
        console.log(e);
      });
  },
};
</script>

<style scoped>
/* 样式可以根据需求自行调整 */
.training-home {
  text-align: center;
}

.header {
  padding: 20px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
}

.buttons {
  display: flex;
  gap: 10px;
}

.card-container {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.card-container p {
  border-bottom: 1.5px dashed silver;
}

.card {
  width: 400px;
  margin: 20px;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
}

.info-card {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 20px;
}

.info-item {
  width: 220px;
  height: 95px;
}
</style>
