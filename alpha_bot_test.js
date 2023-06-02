const { Telegraf, Markup } = require('telegraf')
const axios = require('axios');
const querystring = require('querystring');

const bot = new Telegraf('6212154238:AAGbu0lBL_PBhxKpTRlUv3I72b1XQn61LTk')




bot.command('help', (ctx) => {
    // Verificar si el mensaje proviene de un chat grupal
    if (ctx.chat.type === 'supergroup' || ctx.chat.type === 'group') {
      const privateChatLink = `https://t.me/AI_Alpha_Bot`;
  
      const replyMarkup = Markup.inlineKeyboard([
        Markup.button.url('Start private chat', privateChatLink)
      ]);
  
      ctx.reply('Hello! For personalised help, start a private chat with me by clicking on the link below:', replyMarkup);
    }
  });
  
  // https://t.me/AI_Alpha_Bot
bot.on('message', (ctx) => {
    // Verificar si el mensaje proviene de un chat privado
    if (ctx.chat.type === 'private') {
      const message = ctx.message.text.toLowerCase();
      if (message === 'hey' || message === 'hello' || message === 'hi' || message === 'ey') {
        ctx.reply(`Hey, I'm the AI Alpha bot and I'm here to help you with trading concepts. What do you want to know?`);
    } else {
        // Otras respuestas en el chat privado
    if (message.includes('ai alpha')) {
      ctx.reply('AI Alpha is a trading signal provider that utilizes the power of AI to provide high-quality trade signals to its users. Our mission is to provide our users with a conservative risk management system that harnesses the power of AI to analyze vast amounts of data and provide a good set of potential decisions. We believe that our unique set of principles and values sets us apart from other trading signal providers in the industry.');
    } else if (message.includes('support')) {
      ctx.reply('Support is the price level at which an asset tends to stop falling due to increased buying pressure.');
    } else if (/trend|bullish|bearish/i.test(message)) {
      ctx.reply('In trading, we often talk about bullish and bearish trends. A bullish trend means that prices are expected to rise, while a bearish trend means that prices are expected to fall. We could also make this just visual and simple: ↑Bullish ↓Bearish');
    } else if (message.includes('resistance')) {
      ctx.reply('Resistance is the price level at which an asset tends to stop rising due to increased selling pressure.');
    } else if (message.includes('buy')) {
      ctx.reply('Buy is the price at which you are suggested to buy any currency.');
    } else if (/risk|reward/i.test(message)) {
      ctx.reply(`The ratio of the potential risk (if the trade doesn't go as planned) to the potential reward (if the trade reaches the target). This is a common way traders evaluate the potential profitability of a trade.`);
    } else if (message.includes('reward')) {
      ctx.reply(`The ratio of the potential risk (if the trade doesn't go as planned) to the potential reward (if the trade reaches the target). This is a common way traders evaluate the potential profitability of a trade.`);
    } else if (message.includes('target')) {
      ctx.reply('Target is the price at which you are suggested to sell Bitcoin to make a profit. The term "Resistance 1" refers to a price level that Bitcoin might struggle to rise above, based on past trading patterns.');
    } else if (/signal|premium/i.test(message)) {
      ctx.reply('To access our premium signals please click the follow link: (LINK)');
    } else if (message.includes('how are you?')) {
      ctx.reply('I am an artificial intelligence so I do not have feelings, yet... I hope you are well!');
    } else if (message.includes('newsletter')) {
      ctx.reply('We have a weekly newsletter! To access them follow us on our official Twitter account: <a href="https://twitter.com/tu_cuenta_de_twitter">@tu_cuenta_de_twitter</a>', { parse_mode: 'HTML' });
    } else if (message.includes('twitter')) {
      ctx.reply('To keep up to date with everything we do, follow us on Twitter!  <a href="https://twitter.com/tu_cuenta_de_twitter">@tu_cuenta_de_twitter</a>', { parse_mode: 'HTML' });
    } else if (message.includes('social media')) {
      ctx.reply('Our official accounts are Twitter(LINK) Tiktok(LINK) Web(LINK) We will keep you updated there!');
    } else if (message.includes('thanks')) {
        ctx.reply('Thanks to you for this chat, let me know if you need anything else from me.');
    } else if (message.includes('yes')) {
        ctx.reply(`I'm waiting...`);
    } else if (message.includes('no')) {
        ctx.reply(`Well, what else can I help you with?`);
    } else if (message.includes('trading')) {
        ctx.reply('Trading consists of buying and selling financial assets listed on the stock market such as currencies, shares, futures, options, commodities and cryptocurrencies.');
    } else if (message.includes('limit')) {
        ctx.reply('A crypto limit order is an instruction to buy or sell a cryptocurrency only at a price specified by the trader. It is best suited for the trader who can patiently wait for a price target to be reached.');
    } else if (message.includes('stop')) {
        ctx.reply(`A stop order is set to buy or sell a cryptocurrency at the market price once it has hit the stop price. In that case, the order becomes a market order and is filled at the next available market price.`);
    } else if (message.includes('blockchain')) {
        ctx.reply('A blockchain is a kind of database in which information can be stored. You can think of it as small blocks of information that are added to a long chain. Each new block that is added contains information about the previous and current block. If the old and new block do not match, it will not be connected to the chain.');
    } else if (message.includes('cryptography')) {
        ctx.reply('It includes a technique used to encrypt a message so that only the sender and receiver can read it. Cryptography thus ensures that unauthorized persons cannot gain access to sensitive information.This form of security consists of a combination of mathematical formulas, computer science and engineering.');
    } else if (message.includes('decentralized')) {
        ctx.reply('Decentralization in blockchain refers to the transfer of authority and decision-making from a centralized entity (person, organization, or group thereof) to a distributed network.');
    } else if (message.includes('defi')) {
        ctx.reply('Decentralized finance (DeFi) is an emerging financial technology based on secure distributed ledgers similar to those used by cryptocurrencies. DeFi eliminates the fees that banks and other financial companies charge for using their services. Individuals hold money in a secure digital wallet, can transfer funds in minutes, and anyone with an internet connection can use DeFi.');
    } else if (message.includes('wallet')) {
        ctx.reply('A crypto wallet is software or hardware that enables users to store and use cryptocurrency. With cryptocurrency, there is no tangible currency, no paper money to place within a physical wallet or purse.');
    } else if (message.includes('mining')) {
        ctx.reply('Mining and Staking are mechanisms used to approve and verify transactions. The way one can validate transactions is different for each coin. Miners and Stakers provide a reliable network and in return are paid in cryptocurrency');
    } else if (message.includes('staking')) {
        ctx.reply('Mining and Staking are mechanisms used to approve and verify transactions. The way one can validate transactions is different for each coin. Miners and Stakers provide a reliable network and in return are paid in cryptocurrency');
    } else if (message.includes('layer 1')) {
        ctx.reply ('The Layer 1 protocol consists of the different blockchains (like Bitcoin, Ethereum and Binance Smart Chain) that can process transactions. This layer of the protocol ensures the security of the blockchain with different consensus mechanisms, like proof of work and proof of stake being a part of this layer. ');
    } else if (/layer 2|layer two/i.test(message)) {
        ctx.reply('This layer 2 is also known as the execution layer. As a blockchain grows, the number of transactions being performed on it increases. To support the increased number of transactions, we need scalability (ability to handle the increased load) Layer 2 solutions. Often, off-chain (or third party) solutions are implemented to address any issues within the first layer of the protocol. These solutions do not hamper the features of the first layer but rather add to them.');      
    } else if (/layer 3|layer three/i.test(message)) {
        ctx.reply ('This is the application layer of the blockchain protocol. It is made up of the different blockchain-based applications (Dapps and decentralized autonomous organizations [DAOs]) that we see on the market today');
    } else if (/dao|daos|dao's/i.test(message)) {
        ctx.reply ('A decentralized autonomous organization (DAO) is an emerging form of legal structure that has no central governing body and whose members share a common goal to act in the best interest of the entity. Popularized through cryptocurrency enthusiasts and blockchain technology, DAOs are used to make decisions in a bottom-up management approach.');
    } else if (/dapp|dapps|dapp's/i.test(message)) {
        ctx.reply ('Decentralized applications (dApps) are digital applications or programs that run on a decentralized network, rather than a single computer or server. They are built on blockchain technology and use cryptocurrency as a means of exchange.');
    }


     else {
        ctx.reply("I don't understand, can you be more specific?");
      }



      
}}
  });

  bot.on('new_chat_members', (ctx) => {
    
    const welcomeMessage = `Welcome to the group! 🎉🎉🎉In order to join the group, you need to complete a captcha. Click the button below to get started:`;
    const privateChatLink = `https://t.me/Alpha_Test1_Bot`;
    const replyMarkup = Markup.inlineKeyboard([
      Markup.button.url('CStart captcha', privateChatLink)
    ]);  ctx.reply(welcomeMessage, replyMarkup);
});



  bot.launch();