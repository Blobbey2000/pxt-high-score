//% blockGap=8
//% block="High Score"
//% color="#008037"
//% icon="\uf11b"
namespace HighScore {

    /**
     * Returns the best score value.
     */
    //% block
    export function highScore() {
        return settings.readNumber("high-score");
    }

    /**
     * Resets the best score.
     */
    //% block
    export function resetHighScore() {
        let curr = settings.readNumber("high-score");
        settings.remove("high-score");
    }

    /**
     * Sets the best score to a chosen number.
     */
    //% block="set high score to $high"
    export function setHighScoreTo(high: number) {
        settings.writeNumber("high-score", high)
    }

}