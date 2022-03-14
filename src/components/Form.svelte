<script>
    import {v4 as uuidv4} from 'uuid'
    import {Store} from '../Stores/store'

    import Button from './Button.svelte'
    import Card from './Card.svelte'
    import Rating from './Rating.svelte'

    let text=''
    let btnDisabled=true
    let message
    let minimum=15
    let rating=10
    
    const handleInput=()=>{
        if(text.trim().length<=minimum){
            message=`Please enter at least ${minimum} characters.`
            btnDisabled=true
        } else {
            message=null
            btnDisabled=false
        }
    }

    const handleSelected=(e)=>rating=e.detail

    const handleSubmit=()=>{
        if(text.trim().length>=minimum){
            const newFeedback={
                id:uuidv4(),
                text,
                rating:+rating
            }
            //console.log(newFeedback)
            Store.update((currentFeedback)=>{
                return [newFeedback,...currentFeedback]
            })

            text=''
        }
    }
</script>

<Card>
    <header>
        <h2>Please rate our services.</h2>
    </header>
<form on:submit|preventDefault={handleSubmit}>
<Rating on:rating-select={handleSelected}/>
    <div class="input-group">
        <input type="text" placeholder="Enter your feedbacks" on:input={handleInput} bind:value={text}/>
        <Button type='submit' disabled={btnDisabled}>Add</Button>
    </div>
    {#if message}
        <div class="message">{message}</div>
    {/if}
</form>
</Card>

<style>
    .input-group{
        display: flex;
        flex-direction: row;
        border: 1px solid #ccc;
        padding: 8px 10px;
        border-radius: 8px;
        margin-top: 15px;
    }

    input{
        flex-grow: 2;
        border: none;
        font-size: 16px;
        border-radius: 8px;
        margin-right: 6px;
        font-weight: 700;
        color: gray;
        background-color: rgb(36, 35, 30);
    }

    input:focus{
        outline: none;
    }

    header{
        max-width: 400px;
        margin: auto;
    }

    header h2{
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }

    .message{
        padding-top: 15px;
        text-align: center;
        color: red;
    }
</style>