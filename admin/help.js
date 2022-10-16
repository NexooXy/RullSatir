const fs = require('fs') 
const listmenu = JSON.parse(fs.readFileSync('./admin/listmenu.json')); 

const menu = (x, y, z) => {     
var menu1 = []
var menu2 = ""
Object.keys(x).forEach((i) => { menu1.push(x[i]) }) 
Object.keys(menu1).forEach((i) => { 
menu2 += `┃• *${z + menu1[i]}*\n` }) 
var menu3 = `╭━─━•[ *${y}* ]⊱\n${menu2}╰━─━─━─━─━─━─━─•`
return menu3
}
const help = (prefix, reply, cekUser, namabot, sender) => {
var help1 = `╭━─━•[ *${namabot}* ]⊱
┃• *User* : @${sender.split("@")[0]}
┃• *Hit* : ${cekUser("hit", sender)}
┃• *Emote* : ${cekUser("emote", sender)}
┃• *Star* : ${cekUser("star", sender)}⭐
┃• *Ban* : ${cekUser("ban", sender)}
┃• *Premium* : ${cekUser("premium", sender)}
╰━─━─━─━─━─━─━─•
${menu(listmenu.simple, "Simple", prefix)}
${menu(listmenu.group, "Grub", prefix)}
${menu(listmenu.owner, "Owner", prefix)}
${menu(listmenu.textpro1, "TextPro V1", prefix)}
${menu(listmenu.textpro2, "TextPro V2", prefix)}
${menu(listmenu.gombal, "Gobalan", prefix)}
${menu(listmenu.stress, "Stress!", prefix)}
${menu(listmenu.memegen, "Meme Gen", prefix)}
${menu(listmenu.download, "Downloader", prefix)}
${menu(listmenu.storage, "Storage(Db)", prefix)}
${menu(listmenu.search, "Pencarian", prefix)}
${menu(listmenu.creatif, "Kreatif", prefix)}
${menu(listmenu.creatifme, "Kreatid(ME)", prefix)}
${menu(listmenu.creatiftag, "Kreatif(TAG)", prefix)}
${menu(listmenu.ttp, "Ttl(COLORS)", prefix)}
${menu(listmenu.ranime, "(R)Anime", prefix)}
${menu(listmenu.emostick, "EmojiStick", prefix)}
${menu(listmenu.tagrandom, "Tag Random", prefix)}`
// JANGAN UBAH/HAPUS THX TO🤥
var cr = `╭━─━•[ *THX-TO* ]⊱
┃•  *ADHIRAJ SINGH*
┃•  *RIMURUBOTZ*
┃•  *RULL*
┃•  *LOLI KILLERS*
┃•  *LORD R1YNZ*
╰━─━─━─━─━─━─━─•`
return help1
}

module.exports = { help }