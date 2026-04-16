async function run() {
  try {
    const res = await fetch("https://crm.nambds.vn/form/10");
    const text = await res.text();
    console.log(text);
  } catch (e) {
    console.log(e);
  }
}
run();
