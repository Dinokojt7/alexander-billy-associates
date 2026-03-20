// update-business.js
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function updateBusinessInfo() {
  console.log('\n=================================');
  console.log('UPDATE BUSINESS INFORMATION ONLY');
  console.log('Services, testimonials, FAQs will remain unchanged');
  console.log('=================================\n');

  // Path to your site-data.json
  const dataPath = 'src/lib/data/site-data.json';
  
  // Read current data
  let siteData;
  try {
    const currentData = fs.readFileSync(dataPath, 'utf8');
    siteData = JSON.parse(currentData);
  } catch (error) {
    console.log('❌ Could not find site-data.json at:', dataPath);
    process.exit(1);
  }

  console.log('📋 CURRENT BUSINESS INFO:\n');
  console.log(`Business Name: ${siteData.business.name}`);
  console.log(`Email: ${siteData.business.email}`);
  console.log(`Phone: ${siteData.business.phone}`);
  console.log(`Address: ${siteData.business.address}\n`);

  console.log('Enter new values (press Enter to keep current value):\n');
  
  // Update only business info and contact details
  siteData.business.name = await askQuestion(`Business Name (${siteData.business.name}): `) || siteData.business.name;
  siteData.business.tagline = await askQuestion(`Tagline (${siteData.business.tagline}): `) || siteData.business.tagline;
  siteData.business.shortName = await askQuestion(`Short Name (${siteData.business.shortName}): `) || siteData.business.shortName;
  siteData.business.description = await askQuestion(`Description (${siteData.business.description}): `) || siteData.business.description;
  siteData.business.email = await askQuestion(`Email (${siteData.business.email}): `) || siteData.business.email;
  siteData.business.phone = await askQuestion(`Phone (${siteData.business.phone}): `) || siteData.business.phone;
  siteData.business.address = await askQuestion(`Address (${siteData.business.address}): `) || siteData.business.address;
  
  console.log('\n🌐 SOCIAL MEDIA LINKS:\n');
  siteData.business.social.instagram = await askQuestion(`Instagram URL (${siteData.business.social.instagram}): `) || siteData.business.social.instagram;
  siteData.business.social.facebook = await askQuestion(`Facebook URL (${siteData.business.social.facebook}): `) || siteData.business.social.facebook;
  siteData.business.social.twitter = await askQuestion(`Twitter URL (${siteData.business.social.twitter}): `) || siteData.business.social.twitter;
  siteData.business.social.linkedin = await askQuestion(`LinkedIn URL (${siteData.business.social.linkedin}): `) || siteData.business.social.linkedin;
  
  // Save the updated data
  fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
  
  console.log('\n=================================');
  console.log('✅ BUSINESS INFO UPDATED SUCCESSFULLY!');
  console.log('=================================\n');
  console.log('Updated Information:');
  console.log(`   Business: ${siteData.business.name}`);
  console.log(`   Phone: ${siteData.business.phone}`);
  console.log(`   Email: ${siteData.business.email}`);
  console.log(`   Address: ${siteData.business.address}`);
  console.log('\nAll services, testimonials, and FAQs remain unchanged.');
  console.log('\nNext steps:');
  console.log('1. Run "npm run dev" to preview your site');
  console.log('2. Run "git add ." to stage changes');
  console.log('3. Run "git commit -m "Update business info"');
  console.log('4. Run "git push" to push to GitHub');
  console.log('5. Vercel will auto-deploy');
  
  rl.close();
}

updateBusinessInfo().catch(console.error);