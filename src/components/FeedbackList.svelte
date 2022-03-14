<script>
    import {fade,scale} from 'svelte/transition'

    import {Store} from '../Stores/store'
    import FeedbackItem from './FeedbackItem.svelte'
    
</script>

{#each $Store as feeds(feeds.id)}
    <div in:scale out:fade="{{duration:250}}">
        <FeedbackItem item={feeds} />
    </div>
{/each}