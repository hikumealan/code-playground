const prompt = require('readline').createInterface({input:process.stdin,output:process.stdout,historySize:0});

console.log(process.env);
console.log(process.argv);

// const question = process.env.npm_package_config_stencil_component_name_prompt;
const npmrc = process.env.npm_package_config_prompt_session;
const question = process.env[`npm_package_config_${process.argv[2]}_req`];
const answer = process.env[`npm_package_config_${process.argv[2]}_res`];
const next = process.env[`npm_package_config_${process.argv[2]}_next`];

prompt.question(question, (res) => { 
    require('child_process').execSync(`npm --userconfig=${npmrc} set ask_next='${next} -- ${res}'`, { stdio: 'inherit' });
    require('child_process').execSync(`npm --userconfig=${npmrc} run ${next} -- ${res}`, { stdio: 'inherit' });
    setTimeout(() => process.exit(), 0); 
});