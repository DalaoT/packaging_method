<template>
	<scroll-view scroll-x style="height: 800rpx;width: 100%;background-color: pink;" @scrolltolower="onreachBottom">
		<view class="item" v-for="(item,index) in 15">
			{{item}}
		</view>
	</scroll-view>
</template>

<!-- 没有js -->

<style lang="scss">
	/deep/.uni-scroll-view-content {
		// flex定位 y轴排序，溢出控制
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	.item {
		// 通过大小去控制显示效果
		height: 30%;
		width: 30%;
		background-color: #007AFF;
		// 加个边距看看效果
		margin: 1%;
	}
</style>
