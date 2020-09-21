<template>
    <div>
        <HeadNav />
        <router-view></router-view>
    </div>
</template>
<script>
import HeadNav from "../components/HeadNav";
export default {
    components: {
        HeadNav
    }
};
</script>