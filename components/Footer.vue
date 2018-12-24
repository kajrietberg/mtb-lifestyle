<template>
    <footer>
        <div class="wrapper wrapper--footer">
            <div>
                toon deze {{msg}}
            </div>
            <div>

            </div>
            <div>
                <h3>
                    Klantenservice
                </h3>
                <p>
                    Te bereiken van maandag t/m vrijdag van 9.00 uur t/m 16.30 uur op <a href="tel:0611955688">06-119 556 88</a>.
                </p>
            </div>

        </div>
    </footer>

</template>



<script>
    export default {
        name: "Footer",
        props: {
            msg: String
        }
    };

</script>

<style lang="scss" scoped>
.wrapper--footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>