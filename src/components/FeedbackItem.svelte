<script>
    import {Store} from '../Stores/store'

    import Card from './Card.svelte'
    export let item

    const handleDelete=(itemId)=>{
        Store.update((currentFeedback)=>{
            return currentFeedback.filter(item=>item.id!=itemId)
        })
    }

</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <button class="close" on:click={()=>handleDelete(item.id)}><i class="fa-regular fa-circle-xmark"></i></button>
        <p class="text-display">
            {item.text}
        </p>
</Card>

<style>
    .num-display{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 16px;
        background: #ee8a18;
        color: ghostwhite;
    }
    .close{
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
    }
</style>