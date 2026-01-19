<script setup lang="ts">
import { ref, reactive } from "vue";
import { ElMessage } from 'element-plus';
import axios from 'axios';


// 定义表单
interface FormData {
    speciesName: string;
    description: string;
    email: string;
}

const form = reactive<FormData>({
    speciesName: '',
    description: '',
    email: '',
});

// 是否提交成功
const isSubmitted = ref(false);
const isErrorAlert = ref(false);

// 提交表单
const onSubmit = async () => {
    // 判断表单是否填写完整
    if (!form.speciesName || !form.description || !form.email) {
        isSubmitted.value = false;
        isErrorAlert.value = true;
        ElMessage.error('Please fill in the form completely');
        return;
    }
    // 判断邮箱格式
    const emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    if (!emailReg.test(form.email)) {
        isSubmitted.value = false;
        isErrorAlert.value = true;
        ElMessage.error('Please fill in the correct email format');
        return;
    }

    // 用户向后端 Express 中的 About 页面提交表单
    isSubmitted.value = true;
    isErrorAlert.value = false;
    try {
        const response = await axios.post('/api/about', form);
        if (response.status === 200) {
            ElMessage.success('Submitted successfully');
        } else {
            isSubmitted.value = false;
            isErrorAlert.value = true;
            ElMessage.error('Submission failed');
        }
    } catch (error) {
        isSubmitted.value = false;
        isErrorAlert.value = true;
        ElMessage.error('Submission failed');
    }
};

// 重置表单
const resetForm = () => {
    form.speciesName = '';
    form.description = '';
    form.email = '';
    isSubmitted.value = false;
    isErrorAlert.value = false;
};

</script>

<template>
    <!-- Contribute -->
    <div style="font-size: 20px; font-weight: bold; color: #18338e;">
        <font-awesome-icon :icon="['fas', 'bookmark']" />
        <span> Contribute</span>
    </div>
    <p class="p-text">
        Users can upload data information to us, please feel free to contact us and provide information. We are happy to
        cooperate.
    </p>
    <el-form ref="formRef" :model="form" label-width="auto" style="max-width: 600px">
        <!-- 物种名称 -->
        <el-form-item label="Species Name" prop="speciesName" :rules="[
            { required: true, message: 'Please input species name', trigger: 'blur' }
        ]">
            <el-input v-model="form.speciesName" placeholder="Enter species name" />
        </el-form-item>

        <!-- 文件说明 -->
        <el-form-item label="Data Infomation" prop="description" :rules="[
            { required: true, message: 'Please input data infomation description', trigger: 'blur' }
        ]">
            <el-input v-model="form.description" type="textarea" placeholder="Enter data infomation description" />
        </el-form-item>

        <!-- 邮箱 -->
        <el-form-item prop="email" label="Email" :rules="[
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
        ]">
            <el-input v-model="form.email" placeholder="Enter your email" />
        </el-form-item>

        <!-- 提交按钮 -->
        <el-form-item>
            <el-button type="primary" @click="onSubmit" :disabled="isSubmitted">Submit</el-button>
            <el-button @click="resetForm">Reset</el-button>
        </el-form-item>

        <!-- 提示 -->
        <el-alert v-if="isSubmitted" title="Thanks for your contribution! The information has been submitted."
            type="success" />
        <el-alert v-if="isErrorAlert" title="Please fill in the information as required!" type="error" />
    </el-form>
</template>
<style scoped>
.p-text {
    line-height: 1.8;
}

.about-title {
    margin: 50px 0;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: #18338e;
}

@media screen and (max-width: 1260px) {
    .about-title {
        font-size: 26px;
    }
}
</style>