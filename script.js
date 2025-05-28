function updateFeedbackAudio(
    variables,
    isStart,
    conditions,
    currConditionIndex,
    isConditionCorrect,
    global_context_variables,
    pixiData
) {
    /* ───────────────────────── helpers ───────────────────────── */
    const isOdd = (n) => n % 2 !== 0;
    const isEven = (n) => n % 2 === 0;
    const digitLen = (n) => Math.abs(n).toString().length;
    const digitSum = (n) => Math.abs(n).toString()
        .split("")
        .reduce((a, b) => a + +b, 0);

    /* ──────────────────── meta-context look-ups ───────────────── */
    const totalLives = pixiData.globalContext.parent_variables?.find((v) =>
        v.name.includes("total_lives")
    );
    const totalLivesVal = totalLives?.default ?? totalLives?.value;

    const { tableData } = global_context_variables;
    if (!tableData?.cells?.length) return;

    /* ──────────────── 1. collect numbers *vertically* ─────────── */
    const rows = tableData.cells;                         // 2-D grid
    const maxCols = Math.max(...rows.map((r) => r.length));
    const numbers = [];

    for (let c = 0; c < maxCols; c++) {
        let tmp = "";
        rows.forEach((row) => {
            const cell = row[c];
            if (
                cell?.fillColor?.default !== "#000000" &&
                cell?.clickable?.enabled &&
                cell?.text?.value?.default !== undefined
            ) {
                tmp += cell.text.value.default;
            }
        });
        if (tmp !== "") numbers.push(Number(tmp));
    }

    const allZero = numbers.length === 0 || numbers.every((n) => n === 0);

    /* ─────────────── 2. generic start / end handling ──────────── */
    console.log("totalLivesVal----", totalLivesVal, conditions);
    if (isStart === "end") {
        const status = conditions.map((c) => !!c?.correct);
        if (status.every(Boolean)) return "question_audio_all_correct";
        if (status.some(Boolean)) {
            if (totalLivesVal >= 2) { return "question_audio_partial_correct_attempt1"; }
            else { return "question_audio_partial_correct_last_attempt"; }
        }
        if (totalLivesVal >= 2) { return "question_audio_all_incorrect_attempt1"; }
        else { return "question_audio_all_incorrect_last_attempt"; }
    }

    if (isStart) return `question_audio_checking_${currConditionIndex + 1}`;
    if (isConditionCorrect) return `question_audio_condition_${currConditionIndex + 1}_correct`;

    /* ────────────────── 3. individual-condition checks ────────── */

    /* Condition 0  ➜ 3-digit even  & 5-digit even                  */
    if (currConditionIndex === 0) {
        let has3Even = false, has5Even = false;

        for (const n of numbers) {
            if (!Number.isFinite(n) || !isEven(n)) continue;
            const len = digitLen(n);
            if (len === 3) has3Even = true;
            if (len === 5) has5Even = true;
        }

        if (!has3Even || !has5Even) {
            return allZero
                ? "question_audio_condition_1_default_incorrect"
                : "question_audio_condition_1_partial_incorrect";
        }
    }

    /* Condition 1  ➜ 2-digit odd & 4-digit odd                     */
    if (currConditionIndex === 1) {
        let has2Odd = false, has4Odd = false;

        for (const n of numbers) {
            if (!Number.isFinite(n) || !isOdd(n)) continue;
            const len = digitLen(n);
            if (len === 2) has2Odd = true;
            if (len === 4) has4Odd = true;
        }

        if (!has2Odd || !has4Odd) {
            return allZero
                ? "question_audio_condition_2_default_incorrect"
                : "question_audio_condition_2_partial_incorrect";
        }
    }

    /* Condition 2  ➜ every number’s digit-sum === 15               */
    if (currConditionIndex === 2) {
        const offenders = numbers.filter(
            (n) => Number.isFinite(n) && digitSum(n) !== 15
        );

        if (offenders.length > 0) {
            return allZero
                ? "question_audio_condition_3_default_incorrect"
                : "question_audio_condition_3_partial_incorrect";
        }
    }

    /* ──────────────── 4. generic partial-incorrect fallback ───── */
    return `question_audio_condition_${currConditionIndex + 1}_partial_incorrect`;
}
