<script>
    import {Store} from '../Stores/store'

    $: count=$Store.length
	$: average=$Store.reduce((a,{rating})=>a+rating,0) / $Store.length
</script>

<div class="feedback-stats">
    <h4>{count} reviews</h4>
    <h4>Rating Average: {average}</h4>
</div>

<style>
    .feedback-stats{
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }
</style>