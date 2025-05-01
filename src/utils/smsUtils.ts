
// Common spam keywords and patterns
const spamKeywords = [
  'urgent', 'offer', 'free', 'limited time', 'won', 'winner', 'prize',
  'congrat', 'click here', 'click below', 'bank', 'account suspend',
  'verify', 'debt', 'credit', 'purchase', 'subscription', 'trial',
  'investment', 'opportunity', 'guarantee', 'claim', 'cash', 'money',
  'lottery', 'gift card'
];

// Common spam URL patterns
const suspiciousUrlPatterns = [
  /bit\.ly/i,
  /tinyurl/i,
  /goo\.gl/i,
  /ow\.ly/i,
  /t\.co/i,
  /tiny\.cc/i,
  /is\.gd/i,
  /cli\.gs/i,
  /rebrand\.ly/i,
];

interface SMSCheckResult {
  isSpam: boolean;
  confidence: number;
  category?: string;
  explanation: string;
}

export const checkSMS = (message: string): SMSCheckResult => {
  message = message.toLowerCase();
  let spamScore = 0;
  let triggers: string[] = [];
  let scamCategory = '';

  // Check for suspicious URLs
  const hasUrl = message.includes('http') || 
                 message.includes('www.') || 
                 message.match(/[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.(?:[a-z]{2,})(?:\/|\s|$)/i);
  
  if (hasUrl) {
    spamScore += 25;
    triggers.push('contains URL');
    
    // Check for shortened URLs
    for (const pattern of suspiciousUrlPatterns) {
      if (pattern.test(message)) {
        spamScore += 15;
        triggers.push('shortened URL');
        break;
      }
    }
  }

  // Check for spam keywords
  const keywordMatches = spamKeywords.filter(keyword => 
    message.includes(keyword.toLowerCase())
  );
  
  if (keywordMatches.length > 0) {
    spamScore += Math.min(keywordMatches.length * 10, 40);
    triggers.push(`spam keywords: ${keywordMatches.slice(0, 3).join(', ')}`);
  }

  // Check for urgency indicators
  const urgencyIndicators = [
    'urgent', 'immediately', 'today', 'now', 'hurry', 'limited', 'fast', 'quick',
    'act now', 'expires', 'deadline', 'asap'
  ];
  
  const hasUrgency = urgencyIndicators.some(indicator => message.includes(indicator));
  if (hasUrgency) {
    spamScore += 15;
    triggers.push('urgency language');
  }

  // Check for financial/banking mentions
  if (/bank|account|credit|debit|payment|transfer|paypal|wallet|bitcoin|crypto/i.test(message)) {
    spamScore += 15;
    triggers.push('financial terms');
    scamCategory = 'Financial Phishing';
  }

  // Check for request for personal information
  if (/verify|confirm|validate|update|information|details|login|password|pin|security|identity/i.test(message)) {
    spamScore += 20;
    triggers.push('requests personal information');
    scamCategory = scamCategory || 'Identity Theft';
  }

  // Check for excessive capitalization
  const words = message.split(/\s+/);
  const capsWords = words.filter(word => 
    word.length > 2 && word === word.toUpperCase()
  );
  if (capsWords.length > 2 || (capsWords.length / words.length > 0.3)) {
    spamScore += 10;
    triggers.push('excessive capitalization');
  }

  // Check for prize or lottery scam indicators
  if (/won|winner|congratulation|prize|reward|lottery|selected|drawing/i.test(message)) {
    spamScore += 15;
    triggers.push('prize/lottery language');
    scamCategory = scamCategory || 'Prize/Lottery Scam';
  }

  // Check for delivery/package scam indicators 
  if (/package|delivery|shipment|ups|fedex|dhl|usps|post|track/i.test(message)) {
    spamScore += 10;
    triggers.push('delivery/package terms');
    scamCategory = scamCategory || 'Delivery Notification Scam';
  }

  // Calculate final confidence score (capped at 95%)
  const confidence = Math.min(Math.round(spamScore), 95);
  const isSpam = confidence > 50;

  // Generate explanation based on analysis
  let explanation = '';
  if (isSpam) {
    explanation = `This message appears to be spam because it ${triggers.join(' and ')}. ${
      scamCategory ? `It matches patterns of a common "${scamCategory}" scam.` : ''
    }`;
  } else {
    if (confidence > 30) {
      explanation = `This message shows some suspicious elements (${triggers.join(', ')}) but may be legitimate. Review carefully before responding.`;
    } else {
      explanation = "This message doesn't contain common spam indicators, but always be cautious about unexpected messages.";
    }
  }

  return {
    isSpam,
    confidence,
    category: scamCategory || undefined,
    explanation
  };
};
