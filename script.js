 function secondHighest(arr) {

    const nums = arr.map(v => {

      const n = Number(v);
      return Number.isNaN(n) ? null : n;
    }).filter(x => x !== null);

    if (nums.length < 2) return "-Infinity";

    let max = -Infinity;
    let second = -Infinity;

    for (const num of nums) {
      if (num > max) {
        second = max;
        max = num;
      } else if (num > second && num < max) {
        second = num;
      }
    }

    if (second === -Infinity) return "-Infinity";

    return String(second);
  }

  function Main() {

    let nRaw = prompt("Enter the number of elements");

    const n = Number(nRaw);
    if (!Number.isFinite(n) || n <= 0) {
      alert("-Infinity");
      return;
    }

    const arr = [];
    for (let i = 0; i < n; i++) {
      arr[i] = prompt("Enter element " + (i + 1));
    }

    alert(secondHighest(arr));
  }

  Main();