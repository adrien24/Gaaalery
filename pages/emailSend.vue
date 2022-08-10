<template>
<div>
    <h1>
        oui
    </h1>
</div>
</template>

<script>


export default {
    name: 'Email',
    mounted(){
       Email.send({
            Host : "smtp.elasticemail.com",
            Username : "adrien.bouteiller06@gmail.com",
            Password : "D7055C39A5E4E8473A3C313AB5CE7133001E",
            To : 'lr1b3e48p2@maildax.me',
            From : "smtp.elasticemail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
        message => alert(message)
        );
    }

}
</script>

<style scoped>

</style>
