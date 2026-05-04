import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Eye, EyeOff, X, Check, RotateCcw, Save, Settings, AlertCircle } from 'lucide-react';

// Belleview Badgers brand colors:
// #006747 (forest green), #1E3952 (navy), #F2F7F9 (off-white)
const C = {
  bg: '#0d1a26',           // deepened navy base
  bgGrad: '#1E3952',       // brand navy
  panel: '#1a2e42',        // navy-tinted panel
  border: '#2a4560',       // navy border
  primary: '#006747',      // brand forest green
  accent: '#3d9476',       // lighter green for accents/highlights
  text: '#F2F7F9',         // brand off-white
  textMuted: '#a8b8c4',    // navy-tinted muted
  textDim: '#6a7d8e',      // navy-tinted dim
  unlikely: '#e89a98',     // pale red — won't reach me
  unlikelyBg: 'rgba(232, 154, 152, 0.10)',
  noFit: '#c5acd6',        // pale purple — doesn't fit
  noFitBg: 'rgba(197, 172, 214, 0.10)',
  target: '#7dd4a8',       // pale green — target (slightly more saturated to read on navy)
  targetBg: 'rgba(125, 212, 168, 0.13)',
  warning: '#e8b87a',
};

const POS_COLORS = {
  QB: '#c25852', RB: '#4a8e62', WR: '#3d7eaa', TE: '#9070b8', K: '#788896', FB: '#a07d4c',
};

// Lightweight player metadata. Deep scouting fetched on demand from external JSON.
const INITIAL = [
  { id: 'love', tier: 1, name: 'Jeremiyah Love', pos: 'RB', team: 'ARI', college: 'Notre Dame', pick: 3, s: ['RUSH — 2023: 64-503-7TD (7.9 YPC) | 2024: 162-1121-17TD (6.9) | 2025: 170-1125-14TD (6.6)', 'REC  — 2023: 8-67-0TD | 2024: 28-237-1TD | 2025: 27-237-2TD', 'MISC — 2 KR TDs (2024), 1 PR TD (2025)'] },
  { id: 'mendoza', tier: 1, name: 'Fernando Mendoza', pos: 'QB', team: 'LV', college: 'Indiana', pick: 1, s: ['PASS — 2023 (Cal): 3,004 yds, 17 TD, 6 INT, 62.1% | 2024 (Cal): 3,004 yds, 16 TD, 6 INT, 63.8% | 2025 (IND): 3,724 yds, 35 TD, 6 INT, 70.7%', 'RUSH — 2023: 42-112-2TD | 2024: 67-198-4TD | 2025: 89-312-6TD', 'MISC — 3 game-winning drives in 2025'] },
  { id: 'tate', tier: 1, name: 'Carnell Tate', pos: 'WR', team: 'TEN', college: 'Ohio State', pick: 4, s: ['REC  — 2023: 18-307-1TD (17.1 avg) | 2024: 52-733-4TD (14.1) | 2025: 52-1156-12TD (22.2)', 'RUSH — 3 jet-sweep attempts, 28 yds (career)', 'MISC — 22.2 YPR in 2025 led all P4 WRs with 50+ catches'] },
  { id: 'tyson', tier: 1, name: 'Jordyn Tyson', pos: 'WR', team: 'NO', college: 'Arizona State', pick: 8, s: ['REC  — 2022 (CU): 8-124-1TD | 2023: knee injury, DNP | 2024 (ASU): 75-1101-10TD (14.7) | 2025 (ASU): 71-1005-8TD (14.2)', 'RUSH — 5-42-0TD (2024), 3-19-0TD (2025)', 'MISC — 2 PR for 50+ yds in 2024'] },
  { id: 'lemon', tier: 1, name: 'Makai Lemon', pos: 'WR', team: 'PHI', college: 'USC', pick: 20, s: ['REC  — 2023: 23-314-0TD (13.7) | 2024: 52-764-6TD (14.7) | 2025: 79-1156-11TD (14.6) — Biletnikoff', 'RUSH — 7-58-0TD (career)', 'MISC — 3rd-team AA in 2025, 1st-team All-Big Ten'] },

  { id: 'price', tier: 2, name: 'Jadarian Price', pos: 'RB', team: 'SEA', college: 'Notre Dame', pick: 32, s: ['RUSH — 2023: Achilles, DNP | 2024: 108-746-7TD (6.9) | 2025: 113-674-11TD (6.0)', 'REC  — 2024: 14-112-0TD | 2025: 22-187-2TD', 'MISC — Achilles tear Oct 2023, returned Aug 2024'] },
  { id: 'concepcion', tier: 2, name: 'KC Concepcion', pos: 'WR', team: 'CLE', college: 'Texas A&M', pick: 24, s: ['REC  — 2023 (NCST): 71-839-10TD (11.8) | 2024 (NCST): 40-460-1TD (11.5) | 2025 (TAMU): 55-661-8TD (12.0)', 'RUSH — 2023: 8-62-1TD | 2025: 5-41-0TD', 'PR   — 2023: 12-148-1TD | 2024: 8-72-0TD'] },
  { id: 'sadiq', tier: 2, name: 'Kenyon Sadiq', pos: 'TE', team: 'NYJ', college: 'Oregon', pick: 16, s: ['REC  — 2023: 2-16-0TD | 2024: 24-308-2TD (12.8) | 2025: 36-419-5TD (11.6)', 'RUSH — 1-4-0TD (career gadget)', 'MISC — 6\'6" 241 lbs, former basketball player, 34.1" vert at combine'] },
  { id: 'simpson', tier: 2, name: 'Ty Simpson', pos: 'QB', team: 'LAR', college: 'Alabama', pick: 13, s: ['PASS — 2023-24: backup (29 att total) | 2025: 2,824 yds, 28 TD, 4 INT, 71.4%', 'RUSH — 2025: 62-287-5TD (4.6 avg)', 'MISC — 5-star recruit, sat behind Milroe for 2 years'] },
  { id: 'cooper', tier: 2, name: 'Omar Cooper Jr.', pos: 'WR', team: 'NYJ', college: 'Indiana', pick: 30, s: ['REC  — 2023: 12-220-2TD (18.3) | 2024: 45-727-7TD (16.2) | 2025: 74-933-9TD (12.6)', 'RUSH — 4-38-0TD (career)', 'MISC — Big Ten WR of the Week x3 in 2025'] },

  { id: 'lane', tier: 3, name: 'Ja\'Kobi Lane', pos: 'WR', team: 'BAL', college: 'USC', pick: 80, s: ['REC  — 2023: 2-28-0TD | 2024: 46-525-12TD (11.4, 13g) | 2025: 47-810-6TD (17.2)', 'RUSH — 2-12-0TD (career)', 'MISC — 6\'4" red-zone specialist, 12 TDs on 46 catches in 2024'] },
  { id: 'singleton', tier: 3, name: 'Nicholas Singleton', pos: 'RB', team: 'TEN', college: 'Penn State', pick: 165, s: ['RUSH — 2022: 156-1061-12TD (6.8) | 2023: 146-752-12TD (5.2) | 2024: 170-1099-14TD (6.5) | 2025: 162-729-7TD (4.5)', 'REC  — 2022: 11-85-0TD | 2023: 41-362-1TD | 2024: 24-158-0TD | 2025: 11-72-0TD', 'MISC — Split backfield with Kaytron Allen all 4 years'] },
  { id: 'fields', tier: 3, name: 'Malachi Fields', pos: 'WR', team: 'NYG', college: 'Notre Dame', pick: 74, s: ['REC  — 2023 (UVA): 55-811-5TD (14.7) | 2024 (UVA): 55-808-7TD (14.7) | 2025 (ND): 56-805-6TD (14.4)', 'RUSH — 3-22-0TD (career)', 'MISC — Grad transfer to ND for 2025, consistent 800+ yds each season'] },
  { id: 'branch', tier: 3, name: 'Zachariah Branch', pos: 'WR', team: 'ATL', college: 'Georgia', pick: 79, s: ['REC  — 2023 (USC): 45-503-3TD (11.2) | 2024 (USC): 46-503-4TD (10.9) | 2025 (UGA): 50-624-6TD (12.5)', 'RUSH — 2023: 4-63-0TD | 2025: 3-18-0TD', 'KR/PR — 2023: 2 KR TD, 1 PR TD | 2024: 1 KR TD | 2025: limited returns'] },
  { id: 'sarratt', tier: 3, name: 'Elijah Sarratt', pos: 'WR', team: 'BAL', college: 'Indiana', pick: 115, s: ['REC  — 2023 (JMU): 67-1028-8TD (15.3) | 2024: 53-957-8TD (18.1) | 2025: 59-992-7TD (16.8)', 'RUSH — 2-14-0TD (career)', 'MISC — JMU → Indiana transfer, 3 straight 950+ yd seasons'] },
  { id: 'hurst', tier: 3, name: 'Ted Hurst', pos: 'WR', team: 'TB', college: 'Georgia State', pick: 84, s: ['REC  — 2023: 52-822-7TD (15.8) | 2024: 67-1047-11TD (15.6) | 2025: 74-1202-13TD (16.2)', 'RUSH — 5-33-0TD (career)', 'MISC — Sun Belt\'s all-time receiving TD leader, 31 TDs in 3 seasons'] },

  { id: 'stribling', tier: 4, name: 'De\'Zhaun Stribling', pos: 'WR', team: 'SF', college: 'Ole Miss', pick: 33, s: ['REC  — 2023 (WSU): 63-729-4TD (11.6) | 2024: 34-488-3TD (14.4) | 2025: 54-800-6TD (14.8)', 'RUSH — 2-11-0TD (career)', 'MISC — WSU → Ole Miss transfer, dip in 2024 with new QB'] },
  { id: 'douglas', tier: 4, name: 'Caleb Douglas', pos: 'WR', team: 'MIA', college: 'Texas Tech', pick: 75, s: ['REC  — 2023: 11-154-1TD (14.0) | 2024: 40-670-5TD (16.8) | 2025: 52-853-7TD (16.4)', 'RUSH — 1-8-0TD (career)', 'MISC — Breakout in 2024 after early career silence'] },
  { id: 'bernard', tier: 4, name: 'Germie Bernard', pos: 'WR', team: 'PIT', college: 'Alabama', pick: 47, s: ['REC  — 2023 (UW): 41-419-1TD (10.2) | 2024 (UW): 50-685-5TD (13.7) | 2025 (BAMA): 60-813-7TD (13.6)', 'RUSH — 3-22-0TD (career)', 'KR/PR — 2024: 8-167-0TD KR | 2025: limited'] },
  { id: 'boston', tier: 4, name: 'Denzel Boston', pos: 'WR', team: 'CLE', college: 'Washington', pick: 39, s: ['REC  — 2023: 23-319-6TD (13.9) | 2024: 63-834-9TD (13.2) | 2025: 60-821-12TD (13.7)', 'RUSH — 2-(-3)-0TD (career)', 'MISC — 27 TDs in 3 seasons, elite red-zone rate'] },
  { id: 'brazzell', tier: 4, name: 'Chris Brazzell II', pos: 'WR', team: 'CAR', college: 'Tennessee', pick: 83, s: ['REC  — 2023 (Tul): 40-711-5TD (17.8) | 2024: 24-422-4TD (17.6) | 2025: 46-645-6TD (14.0)', 'RUSH — 1-9-0TD (career)', 'MISC — Tulane → Tennessee, deep-ball specialist early, expanded route tree'] },
  { id: 'coleman-jonah', tier: 4, name: 'Jonah Coleman', pos: 'RB', team: 'DEN', college: 'Washington', pick: 108, s: ['RUSH — 2023 (ARI): 147-871-7TD (5.9) | 2024 (UW): 195-1053-10TD (5.4) | 2025 (UW): 203-1128-11TD (5.6)', 'REC  — 2023: 8-48-0TD | 2024: 15-89-1TD | 2025: 18-114-1TD', 'MISC — Arizona → Washington transfer, 200+ carry workhorse'] },
  { id: 'lance', tier: 4, name: 'Bryce Lance', pos: 'WR', team: 'NO', college: 'NDSU', pick: 136, s: ['REC  — 2023: 33-605-11TD (18.3) | 2024: 48-757-7TD (15.8) | 2025: 52-821-9TD (15.8)', 'RUSH — 4-28-0TD (career)', 'MISC — Trey\'s brother, FCS dominator, 27 TDs in 3 seasons'] },
  { id: 'williams-antonio', tier: 4, name: 'Antonio Williams', pos: 'WR', team: 'WAS', college: 'Clemson', pick: 71, s: ['REC  — 2023: 20-351-4TD (17.6) | 2024: 75-904-11TD (12.1) | 2025: 70-832-6TD (11.9)', 'RUSH — 3-17-0TD (career)', 'PR   — 2024: 10-89-0TD | 2025: 8-61-0TD'] },

  { id: 'thompson', tier: 5, name: 'Brenen Thompson', pos: 'WR', team: 'LAC', college: 'Mississippi State', pick: 105, s: ['REC  — 2024: 40-707-6TD (17.7) | 2025: 52-882-9TD (17.0)', 'RUSH — 3-24-0TD (career)', 'MISC — Former Texas transfer, deep-speed threat'] },
  { id: 'bell-skyler', tier: 5, name: 'Skyler Bell', pos: 'WR', team: 'BUF', college: 'UConn', pick: 125, s: ['REC  — 2024: 54-698-6TD (12.9) | 2025: 52-717-5TD (13.8)', 'RUSH — 2-12-0TD (career)', 'MISC — Wisconsin → UConn transfer, steady P5→G5 producer'] },
  { id: 'allen-kaytron', tier: 5, name: 'Kaytron Allen', pos: 'RB', team: 'WAS', college: 'Penn State', pick: 187, s: ['RUSH — 2024: 195-1108-8TD (5.7) | 2025: 232-1182-12TD (5.1)', 'REC  — 2024: 18-124-0TD | 2025: 22-152-1TD', 'MISC — Singleton\'s PSU backfield mate, took over lead role in 2025'] },
  { id: 'claiborne', tier: 5, name: 'Demond Claiborne', pos: 'RB', team: 'MIN', college: 'Wake Forest', pick: 198, s: ['RUSH — 2024: 233-1049-11TD (4.5) | 2025: 198-1031-10TD (5.2)', 'REC  — 2024: 14-98-0TD | 2025: 19-131-1TD', 'MISC — Wake Forest workhorse, 21 TDs in 2 seasons'] },
  { id: 'johnson-emmett', tier: 5, name: 'Emmett Johnson', pos: 'RB', team: 'KC', college: 'Nebraska', pick: 161, s: ['RUSH — 2024: 124-627-5TD (5.1) | 2025: 210-1222-11TD (5.8)', 'REC  — 2024: 12-67-0TD | 2025: 24-168-2TD', 'MISC — Breakout 2025, 200+ carry season with 5.8 YPC'] },
  { id: 'bell-chris', tier: 5, name: 'Chris Bell', pos: 'WR', team: 'MIA', college: 'Louisville', pick: 94, s: ['REC  — 2024: 54-824-6TD (15.3) | 2025: 60-925-8TD (15.4)', 'RUSH — 2-14-0TD (career)', 'MISC — Big outside WR, 15+ YPR both seasons'] },
  { id: 'thomas', tier: 5, name: 'Zavion Thomas', pos: 'WR', team: 'CHI', college: 'LSU', pick: 89, s: ['REC  — 2024: 32-432-2TD (13.5) | 2025: 45-612-4TD (13.6)', 'PR   — 2025: 8-74-0TD', 'MISC — Mississippi State → LSU, slot/return option'] },
  { id: 'black', tier: 5, name: 'Kaelon Black', pos: 'RB', team: 'SF', college: 'Indiana', pick: 90, s: ['RUSH — 2024: 101-472-4TD (4.7) | 2025: 143-759-6TD (5.3)', 'REC  — 2024: 16-108-0TD | 2025: 28-214-2TD', 'MISC — Receiving upside emerging, 3rd-down profile'] },
  { id: 'wetjen', tier: 5, name: 'Kaden Wetjen', pos: 'WR', team: 'PIT', college: 'Iowa', pick: 121, s: ['REC  — 2025: 54-722-6TD (13.4)', 'PR   — 2025: 12-98-0TD', 'MISC — Iowa walk-on to starter, one-year producer'] },
  { id: 'young', tier: 5, name: 'Colbie Young', pos: 'WR', team: 'CIN', college: 'Georgia', pick: 140, s: ['REC  — 2025: 40-588-5TD (14.7)', 'RUSH — 1-9-0TD', 'MISC — Miami → Georgia, one-year sample but solid YPR'] },

  { id: 'washington-mike', tier: 6, name: 'Mike Washington Jr.', pos: 'RB', team: 'LV', college: 'Arkansas', pick: 122, s: ['RUSH — 2025: 146-822-9TD (5.6)', 'REC  — 2025: 12-89-0TD', 'MISC — One-year starter, SEC production'] },
  { id: 'randall', tier: 6, name: 'Adam Randall', pos: 'RB', team: 'BAL', college: 'Clemson', pick: 174, s: ['RUSH — 2025: 152-819-8TD (5.4)', 'REC  — 2025: 9-61-0TD', 'MISC — Clemson bruiser, one-year sample'] },
  { id: 'mcgowan', tier: 6, name: 'Seth McGowan', pos: 'RB', team: 'IND', college: 'Kentucky', pick: 237, s: ['RUSH — 2025: 189-1025-11TD (5.4)', 'REC  — 2025: 14-98-1TD', 'MISC — Former Oklahoma signee, JUCO → Kentucky'] },
  { id: 'miller-jam', tier: 6, name: 'Jam Miller', pos: 'RB', team: 'NE', college: 'Alabama', pick: 245, s: ['RUSH — 2025: 164-882-9TD (5.4)', 'REC  — 2025: 11-72-0TD', 'MISC — Alabama committee back, took lead in 2025'] },
  { id: 'heidenreich', tier: 6, name: 'Eli Heidenreich', pos: 'RB', team: 'PIT', college: 'Navy', pick: 230, s: ['RUSH — 2025: 142-687-8TD (4.8)', 'REC  — 2025: 8-52-0TD', 'MISC — Service academy, limited NFL upside but productive'] },
  { id: 'law', tier: 6, name: 'Kendrick Law', pos: 'WR', team: 'DET', college: 'Kentucky', pick: 168, s: ['REC  — 2025: 49-632-5TD (12.9)', 'RUSH — 3-18-0TD', 'KR   — 2025: 6-142-0TD'] },
  { id: 'allen-cyrus', tier: 6, name: 'Cyrus Allen', pos: 'WR', team: 'KC', college: 'Cincinnati', pick: 176, s: ['REC  — 2025: 45-678-5TD (15.1)', 'RUSH — 1-7-0TD', 'MISC — Georgia Tech → Cincy, deep-ball speed'] },
  { id: 'coleman-kevin', tier: 6, name: 'Kevin Coleman Jr.', pos: 'WR', team: 'MIA', college: 'Missouri', pick: 177, s: ['REC  — 2025: 52-712-6TD (13.7)', 'RUSH — 2-11-0TD', 'PR   — 2025: 5-38-0TD'] },
  { id: 'virgil', tier: 6, name: 'Reggie Virgil', pos: 'WR', team: 'ARI', college: 'Texas Tech', pick: 143, s: ['REC  — 2025: 48-833-7TD (17.4)', 'RUSH — 1-12-0TD', 'MISC — Small-school profile, elite YPR'] },
  { id: 'brown-barion', tier: 6, name: 'Barion Brown', pos: 'WR', team: 'NO', college: 'LSU', pick: 190, s: ['REC  — 2025: 38-567-4TD (14.9)', 'KR   — 2025: 9-198-0TD', 'MISC — Kentucky → LSU, return value'] },
  { id: 'cameron', tier: 6, name: 'Josh Cameron', pos: 'WR', team: 'JAX', college: 'Baylor', pick: 191, s: ['REC  — 2025: 55-808-7TD (14.7)', 'RUSH — 2-9-0TD', 'MISC — UCF → Baylor, slot producer'] },
  { id: 'benson', tier: 6, name: 'Malik Benson', pos: 'WR', team: 'LV', college: 'Oregon', pick: 195, s: ['REC  — 2025: 42-628-4TD (15.0)', 'RUSH — 1-6-0TD', 'MISC — JUCO → Alabama → Oregon, deep-ball specialist'] },
  { id: 'daniels-cj', tier: 6, name: 'CJ Daniels', pos: 'WR', team: 'LAR', college: 'Miami', pick: 197, s: ['REC  — 2025: 48-712-6TD (14.8)', 'RUSH — 1-(-2)-0TD', 'MISC — Liberty → Miami, G5 → P5 step up'] },
  { id: 'henderson-emm', tier: 6, name: 'Emmanuel Henderson Jr.', pos: 'WR', team: 'SEA', college: 'Kansas', pick: 199, s: ['REC  — 2025: 38-588-4TD (15.5)', 'KR   — 2025: 7-161-0TD', 'MISC — Alabama → Kansas, speed/return profile'] },
  { id: 'williams-cj', tier: 6, name: 'CJ Williams', pos: 'WR', team: 'JAX', college: 'Stanford', pick: 203, s: ['REC  — 2025: 42-545-3TD (13.0)', 'MISC — USC → Stanford, possession profile'] },
  { id: 'bond', tier: 6, name: 'Lewis Bond', pos: 'WR', team: 'HOU', college: 'Boston College', pick: 204, s: ['REC  — 2025: 56-729-5TD (13.0)', 'MISC — Steady BC producer, reliable hands'] },
  { id: 'smith-anthony', tier: 6, name: 'Anthony Smith', pos: 'WR', team: 'DAL', college: 'East Carolina', pick: 218, s: ['REC  — 2025: 60-882-7TD (14.7)', 'KR   — 2025: 5-112-0TD', 'MISC — G5 producer, return upside'] },
  { id: 'burks', tier: 6, name: 'Deion Burks', pos: 'WR', team: 'IND', college: 'Oklahoma', pick: 254, s: ['REC  — 2025: 38-512-4TD (13.5)', 'MISC — Purdue → Oklahoma, slot-only profile'] },

  { id: 'beck', tier: 7, name: 'Carson Beck', pos: 'QB', team: 'ARI', college: 'Miami', pick: 65, s: ['PASS — 2024 (UGA): 3,485 yds, 28 TD, 12 INT, 64.2% | 2025 (Miami): 3,200 yds, 22 TD, 8 INT, 65.8%', 'RUSH — 2024: 28-(-18)-0TD | 2025: 34-12-1TD', 'MISC — Georgia → Miami transfer, classic pocket passer'] },
  { id: 'allar', tier: 7, name: 'Drew Allar', pos: 'QB', team: 'PIT', college: 'Penn State', pick: 76, s: ['PASS — 2024: 3,327 yds, 24 TD, 8 INT, 63.4% | 2025: 3,209 yds, 22 TD, 7 INT, 65.1%', 'RUSH — 2024: 52-82-3TD | 2025: 48-68-2TD', 'MISC — Multi-year PSU starter, big arm, limited mobility'] },
  { id: 'klubnik', tier: 7, name: 'Cade Klubnik', pos: 'QB', team: 'NYJ', college: 'Clemson', pick: 110, s: ['PASS — 2025: 3,458 yds, 26 TD, 9 INT, 66.2%', 'RUSH — 2025: 78-284-5TD (3.6)', 'MISC — Clemson starter, dual-threat ability, improved accuracy in 2025'] },
  { id: 'payton', tier: 7, name: 'Cole Payton', pos: 'QB', team: 'PHI', college: 'NDSU', pick: 178, s: ['PASS — 2025: 2,890 yds, 24 TD, 5 INT, 68.1%', 'RUSH — 2025: 94-412-7TD (4.4)', 'MISC — NDSU dual-threat, FCS production, NFL projection uncertain'] },
  { id: 'green', tier: 7, name: 'Taylen Green', pos: 'QB', team: 'CLE', college: 'Arkansas', pick: 182, s: ['PASS — 2025: 2,712 yds, 18 TD, 11 INT, 59.8%', 'RUSH — 2025: 112-488-6TD (4.4)', 'MISC — Boise State → Arkansas, legs-first QB, accuracy concerns'] },
  { id: 'kaliakmanis', tier: 7, name: 'Athan Kaliakmanis', pos: 'QB', team: 'WAS', college: 'Rutgers', pick: 223, s: ['PASS — 2025: 2,680 yds, 18 TD, 10 INT, 61.3%', 'RUSH — 2025: 56-98-2TD', 'MISC — Minnesota → Rutgers, arm talent but streaky'] },
  { id: 'morton', tier: 7, name: 'Behren Morton', pos: 'QB', team: 'NE', college: 'Texas Tech', pick: 234, s: ['PASS — 2025: 2,944 yds, 21 TD, 9 INT, 64.7%', 'RUSH — 2025: 42-62-1TD', 'MISC — Air Raid product, quick release, limited arm strength'] },
  { id: 'nussmeier', tier: 7, name: 'Garrett Nussmeier', pos: 'QB', team: 'KC', college: 'LSU', pick: 249, s: ['PASS — 2025: 3,112 yds, 24 TD, 11 INT, 62.9%', 'RUSH — 2025: 38-28-1TD', 'MISC — LSU gunslinger, high variance, streaky'] },
  { id: 'stowers', tier: 7, name: 'Eli Stowers', pos: 'TE', team: 'PHI', college: 'Vanderbilt', pick: 54, s: ['REC  — 2024: 49-638-5TD (13.0) | 2025: 58-729-6TD (12.6)', 'RUSH — 2-8-0TD (career)', 'MISC — Texas A&M → Vandy, athletic move TE, ascending'] },
  { id: 'boerkircher', tier: 7, name: 'Nate Boerkircher', pos: 'TE', team: 'JAX', college: 'Texas A&M', pick: 56, s: ['REC  — 2024: 18-178-2TD | 2025: 24-218-3TD', 'MISC — Blocking-first TE, limited receiving ceiling'] },
  { id: 'klein', tier: 7, name: 'Marlin Klein', pos: 'TE', team: 'HOU', college: 'Michigan', pick: 59, s: ['REC  — 2025: 32-428-3TD (13.4)', 'MISC — German import, basketball background, raw but athletic'] },
  { id: 'klare', tier: 7, name: 'Max Klare', pos: 'TE', team: 'LAR', college: 'Ohio State', pick: 61, s: ['REC  — 2024: 51-685-4TD (13.4) | 2025: 46-595-5TD (12.9)', 'MISC — Stanford → OSU, reliable intermediate target'] },
  { id: 'roush', tier: 7, name: 'Sam Roush', pos: 'TE', team: 'CHI', college: 'Stanford', pick: 69, s: ['REC  — 2025: 38-423-3TD (11.1)', 'MISC — Stanford legacy, possession TE profile'] },
  { id: 'delp', tier: 7, name: 'Oscar Delp', pos: 'TE', team: 'NO', college: 'Georgia', pick: 73, s: ['REC  — 2024: 21-318-4TD (15.1) | 2025: 34-482-6TD (14.2)', 'MISC — UGA inline TE, red-zone upside, limited volume in run-heavy O'] },
  { id: 'kacmarek', tier: 7, name: 'Will Kacmarek', pos: 'TE', team: 'MIA', college: 'Ohio State', pick: 87, s: ['REC  — 2025: 12-98-1TD', 'MISC — Ohio → OSU transfer, blocking TE only'] },
  { id: 'raridon', tier: 7, name: 'Eli Raridon', pos: 'TE', team: 'NE', college: 'Notre Dame', pick: 95, s: ['REC  — 2024: 21-244-3TD (11.6) | 2025: 36-412-4TD (11.4)', 'MISC — ND inline TE, steady producer, knee injury history'] },
  { id: 'hibner', tier: 7, name: 'Matthew Hibner', pos: 'TE', team: 'BAL', college: 'SMU', pick: 133, s: ['REC  — 2025: 18-192-2TD', 'MISC — Michigan → SMU, athletic but unproven'] },
  { id: 'joly', tier: 7, name: 'Justin Joly', pos: 'TE', team: 'DEN', college: 'NC State', pick: 152, s: ['REC  — 2024: 40-482-5TD (12.1) | 2025: 55-656-6TD (11.9)', 'MISC — UConn → NC State, productive move TE'] },
  { id: 'koziol', tier: 7, name: 'Tanner Koziol', pos: 'TE', team: 'JAX', college: 'Houston', pick: 164, s: ['REC  — 2025: 14-112-1TD', 'MISC — Ball State → Houston, blocking TE'] },
  { id: 'nowakowski', tier: 7, name: 'Riley Nowakowski', pos: 'TE', team: 'PIT', college: 'Indiana', pick: 169, s: ['REC  — 2025: 11-89-0TD', 'MISC — Wisconsin → IU, fullback/H-back hybrid'] },
  { id: 'royer', tier: 7, name: 'Joe Royer', pos: 'TE', team: 'CLE', college: 'Cincinnati', pick: 170, s: ['REC  — 2025: 22-248-2TD (11.3)', 'MISC — Ohio State → Cincy, receiving TE only'] },
  { id: 'cuevas', tier: 7, name: 'Josh Cuevas', pos: 'TE', team: 'BAL', college: 'Alabama', pick: 173, s: ['REC  — 2025: 8-64-0TD', 'MISC — Cal Poly → Bama, blocking specialist'] },
  { id: 'traore', tier: 7, name: 'Seydou Traore', pos: 'TE', team: 'MIA', college: 'Mississippi State', pick: 180, s: ['REC  — 2025: 10-88-1TD', 'MISC — International prospect, raw athlete'] },
  { id: 'sharp', tier: 7, name: 'Bauer Sharp', pos: 'TE', team: 'TB', college: 'LSU', pick: 185, s: ['REC  — 2025: 15-134-1TD', 'MISC — Oklahoma → LSU, blocking/inline TE'] },
  { id: 'endries', tier: 7, name: 'Jack Endries', pos: 'TE', team: 'CIN', college: 'Texas', pick: 221, s: ['REC  — 2025: 20-198-2TD', 'MISC — Cal → Texas, possession TE'] },
  { id: 'kanak', tier: 7, name: 'Jaren Kanak', pos: 'TE', team: 'TEN', college: 'Oklahoma', pick: 225, s: ['REC  — 2025: 6-48-0TD', 'MISC — Former LB convert, special-teams only'] },
  { id: 'ryan', tier: 7, name: 'Carsen Ryan', pos: 'TE', team: 'CLE', college: 'BYU', pick: 248, s: ['REC  — 2025: 9-72-1TD', 'MISC — UCLA → BYU, blocking TE'] },
  { id: 'bentley', tier: 7, name: 'Dallen Bentley', pos: 'TE', team: 'DEN', college: 'Utah', pick: 256, s: ['REC  — 2025: 4-28-0TD', 'MISC — Snow College → Utah, developmental'] },
  { id: 'bredeson', tier: 7, name: 'Max Bredeson', pos: 'FB', team: 'MIN', college: 'Michigan', pick: 159, s: ['RUSH — 2025: 18-62-2TD', 'REC  — 2025: 8-52-1TD', 'MISC — Traditional fullback, lead blocker, special teams'] },
  { id: 'smack', tier: 7, name: 'Trey Smack', pos: 'K', team: 'GB', college: 'Florida', pick: 216, s: ['FG   — 2025: 22-27 (81.5%), long 56 | XP: 48-48', 'KO   — 2025: 82.4% touchbacks', 'MISC — Lou Groza finalist, reliable leg'] },
];

const TIER_INFO = {
  1: { label: 'Tier 1 — Elite (Top 5)', color: '#d4b85a' },
  2: { label: 'Tier 2 — Mid 1st Round', color: '#b39847' },
  3: { label: 'Tier 3 — Early 2nd Round', color: '#8e7a3a' },
  4: { label: 'Tier 4 — Late 2nd / Early 3rd', color: '#6e5d2e' },
  5: { label: 'Tier 5 — Late 3rd / 4th Fliers', color: '#5a4d28' },
  6: { label: 'Tier 6 — Deep Stash', color: '#4a3f23' },
  7: { label: 'Tier 7 — TE / QB / Roster Bloat', color: '#3a3220' },
};

const BadgersLogo = ({ size = 38 }) => (
  <div style={{
    width: size, height: size, borderRadius: '50%',
    background: `radial-gradient(circle at 30% 30%, ${C.accent}55, ${C.primary} 60%, #00432e)`,
    border: `2px solid ${C.text}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: size * 0.42, fontWeight: 900, color: C.text,
    fontFamily: 'Georgia, serif', letterSpacing: '-1px',
    boxShadow: `0 0 14px ${C.primary}88, inset 0 0 8px rgba(0,0,0,0.3)`,
    flexShrink: 0,
  }}>BB</div>
);

// ===== Get the most relevant accent color for a player based on flags =====
// Priority: target (positive) > unlikely > noFit
function getFlagColors(p) {
  if (p.target) return { color: C.target, bg: C.targetBg, border: `${C.target}55` };
  if (p.unlikely) return { color: C.unlikely, bg: C.unlikelyBg, border: `${C.unlikely}55` };
  if (p.noFit) return { color: C.noFit, bg: C.noFitBg, border: `${C.noFit}55` };
  return { color: C.text, bg: C.panel, border: C.border };
}


// ===== Remote board sync helpers =====
// Primary sync source: /api/badgers-board-state backed by Neon Postgres.
// Local storage is only a fallback backup if the API is temporarily unavailable.
const BOARD_API_URL = '/api/badgers-board-state';
const LOCAL_BACKUP_KEY = 'bb-draft-board-local-backup-v1';

function buildBoardData(players, scoutingUrl) {
  const orderIds = players.map(p => p.id);
  const tiers = {};
  const unlikely = {};
  const noFit = {};
  const target = {};
  const notes = {};

  players.forEach(p => {
    const initialTier = INITIAL.find(ip => ip.id === p.id)?.tier;
    if (p.tier !== initialTier) tiers[p.id] = p.tier;
    if (p.unlikely) unlikely[p.id] = true;
    if (p.noFit) noFit[p.id] = true;
    if (p.target) target[p.id] = true;
    if (p.userNote && p.userNote.trim()) notes[p.id] = p.userNote;
  });

  return {
    orderIds,
    tiers,
    unlikely,
    noFit,
    target,
    notes,
    scoutingUrl: scoutingUrl || '/scouting-reports.json',
  };
}

function applySavedBoardData(saved) {
  let next = INITIAL.map(p => ({ ...p }));
  const data = saved && typeof saved === 'object' ? saved : {};

  if (Array.isArray(data.orderIds)) {
    const byId = Object.fromEntries(next.map(p => [p.id, p]));
    const ordered = data.orderIds.map(id => byId[id]).filter(Boolean);
    INITIAL.forEach(p => {
      if (!data.orderIds.includes(p.id)) ordered.push({ ...p });
    });
    next = ordered;
  }

  if (data.tiers) {
    next = next.map(p => data.tiers[p.id] ? { ...p, tier: data.tiers[p.id] } : p);
  }

  if (data.unlikely) next = next.map(p => ({ ...p, unlikely: !!data.unlikely[p.id] }));
  if (data.noFit) next = next.map(p => ({ ...p, noFit: !!data.noFit[p.id] }));
  if (data.target) next = next.map(p => ({ ...p, target: !!data.target[p.id] }));
  if (data.notes) next = next.map(p => ({ ...p, userNote: data.notes[p.id] || '' }));

  return {
    players: next,
    scoutingUrl: data.scoutingUrl !== undefined ? data.scoutingUrl : '/scouting-reports.json',
  };
}

function saveLocalBackup(data) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCAL_BACKUP_KEY, JSON.stringify(data));
  } catch (e) {
    // Local backup is optional. Remote sync is the main source of truth.
  }
}

function loadLocalBackup() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(LOCAL_BACKUP_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

async function loadRemoteBoardState() {
  const res = await fetch(BOARD_API_URL, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    let message = `Board sync load failed: HTTP ${res.status}`;
    try {
      const body = await res.json();
      if (body?.error) message = body.error;
    } catch (e) {
      // Keep the HTTP status message.
    }
    throw new Error(message);
  }

  const body = await res.json();
  return body?.data || {};
}

async function saveRemoteBoardState(data) {
  const res = await fetch(BOARD_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (!res.ok) {
    let message = `Board sync save failed: HTTP ${res.status}`;
    try {
      const body = await res.json();
      if (body?.error) message = body.error;
    } catch (e) {
      // Keep the HTTP status message.
    }
    throw new Error(message);
  }

  const body = await res.json();
  return body?.data || data;
}

// ===== Scouting render =====
function ScoutingSection({ playerId, scoutingUrl, scoutingCache, scoutingStatus, scoutingError }) {
  const renderValue = (val) => {
    if (!val) return null;

    if (Array.isArray(val)) {
      return (
        <ul style={{ margin: 0, paddingLeft: '18px' }}>
          {val.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '4px' }}>{String(item)}</li>
          ))}
        </ul>
      );
    }

    if (typeof val === 'object') {
      return (
        <pre style={{
          whiteSpace: 'pre-wrap',
          margin: 0,
          fontSize: '12px',
          lineHeight: '1.45',
          color: C.textMuted,
        }}>
          {JSON.stringify(val, null, 2)}
        </pre>
      );
    }

    return String(val);
  };

  if (!scoutingUrl) {
    return (
      <div style={{ fontSize: '12px', color: C.textDim, fontStyle: 'italic' }}>
        No scouting URL configured. Use ⚙ to add a scouting JSON URL.
      </div>
    );
  }

  if (scoutingStatus === 'loading') {
    return <div style={{ fontSize: '12px', color: C.textDim }}>Loading scouting reports...</div>;
  }

  if (scoutingStatus === 'error') {
    return (
      <div style={{ fontSize: '12px', color: C.unlikely, lineHeight: '1.5' }}>
        Failed to load scouting reports: {scoutingError}
      </div>
    );
  }

  if (scoutingStatus !== 'loaded') {
    return <div style={{ fontSize: '12px', color: C.textDim }}>Scouting reports not loaded yet.</div>;
  }

  const rawData = scoutingCache?.[playerId];

  if (!rawData) {
    return (
      <div style={{ fontSize: '12px', color: C.textDim, lineHeight: '1.5' }}>
        No scouting data found for player ID: <code>{playerId}</code>
      </div>
    );
  }

  const data = typeof rawData === 'string' ? { shortReport: rawData } : rawData;

  if (data.shortReport || data.summary || data.report) {
    return (
      <div style={{ fontSize: '13px', lineHeight: '1.6', color: C.text }}>
        {renderValue(data.shortReport || data.summary || data.report)}
      </div>
    );
  }

  const sections = [
    ['ATHLETIC PROFILE', data.athleticProfile],
    ['STRENGTHS', data.strengths],
    ['WEAKNESSES', data.weaknesses],
    ['NFL FIT', data.nflFit],
    ['COMP', data.comp],
    ['DYNASTY OUTLOOK', data.dynastyOutlook],
  ].filter(([, v]) => v);

  if (sections.length === 0 && !data.verdict && !data.badgersFit) {
    return (
      <div style={{ fontSize: '12px', color: C.textDim, lineHeight: '1.5' }}>
        Scouting entry found for <code>{playerId}</code>, but it does not use a recognized field.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {data.badgersFit && (
        <div style={{
          padding: '10px 12px',
          background: `${C.primary}33`, border: `1px solid ${C.accent}88`,
          borderRadius: '4px',
        }}>
          <div style={{
            fontSize: '9.5px', letterSpacing: '2px',
            color: C.target, fontWeight: 700, marginBottom: '4px',
          }}>BADGERS FIT</div>
          <div style={{ fontSize: '13px', lineHeight: '1.55', color: C.text }}>{renderValue(data.badgersFit)}</div>
        </div>
      )}
      {sections.map(([label, val]) => (
        <div key={label}>
          <div style={{
            fontSize: '9.5px', letterSpacing: '2px',
            color: C.accent, fontWeight: 700, marginBottom: '4px',
          }}>{label}</div>
          <div style={{ fontSize: '13px', lineHeight: '1.55', color: C.text }}>{renderValue(val)}</div>
        </div>
      ))}
      {data.verdict && (
        <div style={{
          marginTop: '4px', padding: '10px 12px',
          background: `${C.primary}22`, border: `1px solid ${C.accent}55`,
          borderRadius: '3px',
        }}>
          <div style={{
            fontSize: '9.5px', letterSpacing: '2px',
            color: C.accent, fontWeight: 700, marginBottom: '4px',
          }}>VERDICT</div>
          <div style={{ fontSize: '13px', lineHeight: '1.55', color: C.text }}>{renderValue(data.verdict)}</div>
        </div>
      )}
    </div>
  );
}

// ===== Settings modal =====
function SettingsModal({ open, onClose, scoutingUrl, onSaveUrl }) {
  const [url, setUrl] = useState(scoutingUrl || '');
  useEffect(() => { if (open) setUrl(scoutingUrl || ''); }, [open, scoutingUrl]);
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
      zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '16px',
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: C.panel, border: `1px solid ${C.border}`,
        borderRadius: '6px', padding: '20px',
        width: '100%', maxWidth: '500px',
      }}>
        <div style={{
          fontSize: '14px', fontWeight: 700, color: C.accent,
          letterSpacing: '2px', marginBottom: '14px',
        }}>SETTINGS</div>
        <div style={{ marginBottom: '6px', fontSize: '12px', color: C.textMuted }}>
          Scouting JSON URL
        </div>
        <input
          type="text" value={url} onChange={(e) => setUrl(e.target.value)}
          placeholder="/scouting-reports.json or https://gist.githubusercontent.com/..."
          style={{
            width: '100%', padding: '8px',
            background: C.bg, color: C.text,
            border: `1px solid ${C.border}`, borderRadius: '4px',
            fontFamily: 'monospace', fontSize: '12px',
          }}
        />
        <div style={{
          marginTop: '8px', fontSize: '11px',
          color: C.textDim, lineHeight: '1.5',
        }}>
          Best Vercel option: put <code>scouting-reports.json</code> in the public folder and use <code>/scouting-reports.json</code>. A Gist raw URL also works if the file is public.
        </div>
        <div style={{
          marginTop: '16px', display: 'flex',
          gap: '8px', justifyContent: 'flex-end',
        }}>
          <button onClick={onClose} style={{
            background: 'transparent', border: `1px solid ${C.border}`,
            color: C.textMuted, padding: '8px 14px',
            borderRadius: '3px', cursor: 'pointer',
          }}>Cancel</button>
          <button onClick={() => { onSaveUrl(url.trim()); onClose(); }} style={{
            background: C.primary, border: `1px solid ${C.accent}`,
            color: C.text, padding: '8px 14px',
            borderRadius: '3px', cursor: 'pointer', fontWeight: 600,
          }}>Save</button>
        </div>
      </div>
    </div>
  );
}

// ===== Main =====
export default function BadgersDraftBoard() {
  const [players, setPlayers] = useState(INITIAL);
  const [expandedId, setExpandedId] = useState(null);
  const [draggedId, setDraggedId] = useState(null);
  const [dragOverId, setDragOverId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState('');
  const [saveError, setSaveError] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [scoutingUrl, setScoutingUrl] = useState('/scouting-reports.json');
  const [scoutingCache, setScoutingCache] = useState(null);
  const [scoutingStatus, setScoutingStatus] = useState('no-url');
  const [scoutingError, setScoutingError] = useState('');

  useEffect(() => {
    (async () => {
      let loadedFromBackup = false;

      try {
        const saved = await loadRemoteBoardState();
        const applied = applySavedBoardData(saved);
        setPlayers(applied.players);
        setScoutingUrl(applied.scoutingUrl);
        saveLocalBackup(saved);
        setSaveError('');
      } catch (remoteError) {
        const backup = loadLocalBackup();

        if (backup) {
          const applied = applySavedBoardData(backup);
          setPlayers(applied.players);
          setScoutingUrl(applied.scoutingUrl);
          loadedFromBackup = true;
          setSaveError(`Remote sync unavailable. Loaded local backup. ${remoteError?.message || ''}`.trim());
        } else {
          setPlayers(INITIAL.map(p => ({ ...p })));
          setSaveError(`Remote sync unavailable. Using defaults. ${remoteError?.message || ''}`.trim());
        }
      }

      setLoading(false);

      if (loadedFromBackup) {
        setTimeout(() => setSaveError(''), 7000);
      }
    })();
  }, []);

  useEffect(() => {
    if (!scoutingUrl) {
      setScoutingCache(null);
      setScoutingStatus('no-url');
      setScoutingError('');
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    const loadScouting = async () => {
      setScoutingStatus('loading');
      setScoutingError('');

      try {
        const res = await fetch(scoutingUrl, {
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const text = await res.text();
        let json;

        try {
          json = JSON.parse(text);
        } catch (e) {
          throw new Error(`Invalid JSON. Response begins with: ${text.slice(0, 80)}`);
        }

        let playersBlock = json.players || json;

        if (Array.isArray(playersBlock)) {
          playersBlock = Object.fromEntries(
            playersBlock
              .filter(item => item && item.id)
              .map(item => [item.id, item])
          );
        }

        if (!playersBlock || typeof playersBlock !== 'object' || Array.isArray(playersBlock)) {
          throw new Error('Scouting JSON must be an object, { "players": { ... } }, or an array of player objects with id fields.');
        }

        if (!cancelled) {
          setScoutingCache(playersBlock);
          setScoutingStatus('loaded');
        }
      } catch (e) {
        if (e?.name === 'AbortError') return;

        if (!cancelled) {
          setScoutingCache(null);
          setScoutingStatus('error');
          setScoutingError(e?.message || 'Unknown scouting fetch error');
        }
      }
    };

    loadScouting();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [scoutingUrl]);

  useEffect(() => {
    if (loading) return;

    const t = setTimeout(async () => {
      const boardData = buildBoardData(players, scoutingUrl);
      saveLocalBackup(boardData);

      try {
        await saveRemoteBoardState(boardData);
        setSaveStatus('Synced');
        setSaveError('');
        setTimeout(() => setSaveStatus(''), 1500);
      } catch (e) {
        setSaveStatus('Saved locally');
        setSaveError(`Remote sync failed: ${e?.message || 'unknown'}`);
        setTimeout(() => setSaveStatus(''), 2000);
        setTimeout(() => setSaveError(''), 6000);
      }
    }, 600);

    return () => clearTimeout(t);
  }, [players, scoutingUrl, loading]);

  const toggleExpand = (id) => setExpandedId(prev => prev === id ? null : id);
  const updatePlayer = (id, patch) => setPlayers(prev => prev.map(p => p.id === id ? { ...p, ...patch } : p));
  const toggleFlag = (id, flag) => setPlayers(prev => prev.map(p => p.id === id ? { ...p, [flag]: !p[flag] } : p));
  const setTier = (id, newTier) => setPlayers(prev => prev.map(p => p.id === id ? { ...p, tier: newTier } : p));

  // Move with cross-tier support: when crossing into a different tier, the player's tier updates
  const moveByOne = (idx, direction) => {
    setPlayers(prev => {
      const arr = [...prev];
      const targetIdx = idx + direction;
      if (targetIdx < 0 || targetIdx >= arr.length) return prev;
      const player = arr[idx];
      const neighbor = arr[targetIdx];
      // If crossing into a different tier group, update the tier on the moving player
      const newPlayer = { ...player };
      if (neighbor.tier !== player.tier) {
        newPlayer.tier = neighbor.tier;
      }
      arr[idx] = arr[targetIdx];
      arr[targetIdx] = newPlayer;
      return arr;
    });
  };
  const moveUp = (idx) => moveByOne(idx, -1);
  const moveDown = (idx) => moveByOne(idx, 1);

  const onDragStart = (id) => setDraggedId(id);
  const onDragOver = (e, id) => { e.preventDefault(); if (dragOverId !== id) setDragOverId(id); };
  const onDrop = (e, targetId) => {
    e.preventDefault();
    if (!draggedId || draggedId === targetId) { setDraggedId(null); setDragOverId(null); return; }
    setPlayers(prev => {
      const fromIdx = prev.findIndex(p => p.id === draggedId);
      const toIdx = prev.findIndex(p => p.id === targetId);
      if (fromIdx === -1 || toIdx === -1) return prev;
      const arr = [...prev];
      const [item] = arr.splice(fromIdx, 1);
      // adopt the destination's tier
      const destTier = arr[Math.min(toIdx, arr.length - 1)]?.tier ?? item.tier;
      const newItem = { ...item, tier: destTier };
      arr.splice(toIdx, 0, newItem);
      return arr;
    });
    setDraggedId(null); setDragOverId(null);
  };
  const onDragEnd = () => { setDraggedId(null); setDragOverId(null); };

  const reset = async () => {
    if (!confirm('Reset all rankings, tiers, notes, and flags to default? Cannot be undone.')) return;
    setPlayers(INITIAL.map(p => ({ ...p })));
    setScoutingUrl('/scouting-reports.json');
    setScoutingCache(null);
    setScoutingStatus('loading');
    setScoutingError('');
  };

  const saveScoutingUrl = async (url) => {
    setScoutingUrl(url);
    setScoutingCache(null);
    setScoutingStatus(url ? 'loading' : 'no-url');
    setScoutingError('');
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh', background: C.bg, color: C.accent,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Georgia, serif',
      }}>Loading draft board...</div>
    );
  }

  const grouped = {};
  players.forEach((p, idx) => {
    const t = p.tier || 7;
    if (!grouped[t]) grouped[t] = [];
    grouped[t].push({ ...p, _absIdx: idx });
  });

  let runningRank = 0;

  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      background: `linear-gradient(180deg, ${C.bg} 0%, ${C.bgGrad} 100%)`,
      color: C.text,
      fontFamily: '"Georgia", "Times New Roman", serif',
      paddingBottom: '60px', overflowY: 'auto',
    }}>
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; height: auto; min-height: 100vh; overflow-y: auto; }
        button { font-family: inherit; }
        textarea {
          font-family: inherit; width: 100%;
          background: ${C.bg}; color: ${C.text};
          border: 1px solid ${C.border}; border-radius: 4px;
          padding: 8px; font-size: 14px; min-height: 70px; resize: vertical;
        }
        textarea:focus { outline: 1px solid ${C.accent}; }
        .player-row.dragging { opacity: 0.4; }
        .player-row.drag-over { border-top: 2px solid ${C.accent} !important; }
        .pos-badge {
          display: inline-block; padding: 2px 8px; border-radius: 3px;
          font-size: 11px; font-weight: 700; color: white; letter-spacing: 0.5px;
        }
        .tier-jump-btn {
          background: transparent; border: 1px solid ${C.border};
          color: ${C.textMuted}; padding: 4px 8px;
          border-radius: 3px; cursor: pointer; font-size: 11px;
          font-family: inherit;
        }
        .tier-jump-btn:hover { background: ${C.primary}33; color: ${C.accent}; }
        .tier-jump-btn.current { background: ${C.primary}55; color: ${C.accent}; border-color: ${C.accent}; }
        @media (max-width: 600px) { .player-name { font-size: 15px !important; } }
      `}</style>

      <SettingsModal
        open={settingsOpen} onClose={() => setSettingsOpen(false)}
        scoutingUrl={scoutingUrl} onSaveUrl={saveScoutingUrl}
      />

      <div style={{
        position: 'sticky', top: 0, zIndex: 10,
        background: `${C.bg}f0`, backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${C.border}`, padding: '12px 14px',
      }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '10px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BadgersLogo size={42} />
            <div>
              <div style={{
                fontSize: '19px', fontWeight: 700, color: C.text,
                letterSpacing: '1.5px', lineHeight: 1.1,
              }}>BELLEVIEW BADGERS</div>
              <div style={{
                fontSize: '10px', color: C.accent,
                letterSpacing: '2.5px', marginTop: '3px',
              }}>2026 DYNASTY DRAFT BOARD</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {saveStatus && (
              <span style={{
                fontSize: '11px', color: C.accent,
                display: 'flex', alignItems: 'center', gap: '4px',
              }}><Save size={12} /> {saveStatus}</span>
            )}
            {saveError && (
              <span style={{ fontSize: '11px', color: C.unlikely }}>{saveError}</span>
            )}
            <button onClick={() => setSettingsOpen(true)} title="Settings" style={{
              background: 'transparent', border: `1px solid ${C.border}`,
              color: C.textMuted, padding: '6px 10px',
              borderRadius: '3px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px',
            }}><Settings size={12} /></button>
            <button onClick={reset} title="Reset" style={{
              background: 'transparent', border: `1px solid ${C.border}`,
              color: C.textMuted, padding: '6px 10px',
              borderRadius: '3px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px',
            }}><RotateCcw size={12} /></button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '14px' }}>
        {scoutingStatus === 'error' && (
          <div style={{
            padding: '10px 12px', marginBottom: '14px',
            background: `${C.warning}1a`, border: `1px solid ${C.warning}55`,
            borderRadius: '4px', fontSize: '12px',
            color: C.warning, lineHeight: '1.5',
            display: 'flex', alignItems: 'flex-start', gap: '8px',
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '1px' }} />
            <div>
              <strong>Scouting reports failed to load.</strong> {scoutingError}. Tap ⚙ to change the URL.
            </div>
          </div>
        )}

        <div style={{
          padding: '10px 12px',
          background: `${C.primary}14`,
          border: `1px solid ${C.border}`,
          borderRadius: '4px', marginBottom: '20px',
          fontSize: '12px', color: C.textMuted, lineHeight: '1.7',
        }}>
          <strong style={{ color: C.accent }}>Flags (toggle independently):</strong><br/>
          <span style={{ color: C.target }}>✓ pale green</span> = target ·{' '}
          <span style={{ color: C.unlikely }}>👁 pale red</span> = won't reach me ·{' '}
          <span style={{ color: C.noFit }}>✕ pale purple</span> = doesn't fit
          <br/>
          <span style={{ color: C.textDim, fontSize: '11px' }}>Use ↑↓ to reorder (crosses tiers automatically). Tap a name to expand for tier-jump buttons + scouting + notes.</span>
        </div>

        {[1, 2, 3, 4, 5, 6, 7].map(tier => {
          const tp = grouped[tier] || [];
          if (tp.length === 0) return null;
          const info = TIER_INFO[tier];
          return (
            <div key={tier} style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                marginBottom: '10px', paddingBottom: '6px',
                borderBottom: `2px solid ${info.color}`,
              }}>
                <div style={{
                  fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px',
                  color: info.color, textTransform: 'uppercase',
                }}>{info.label}</div>
                <div style={{
                  flex: 1, height: '1px',
                  background: `linear-gradient(90deg, ${info.color}40, transparent)`,
                }} />
              </div>

              {tp.map(p => {
                runningRank += 1;
                const rank = runningRank;
                const isExpanded = expandedId === p.id;
                const isDragging = draggedId === p.id;
                const isDragOver = dragOverId === p.id;
                const idx = p._absIdx;
                const flagColors = getFlagColors(p);

                return (
                  <div
                    key={p.id}
                    className={`player-row ${isDragging ? 'dragging' : ''} ${isDragOver ? 'drag-over' : ''}`}
                    draggable
                    onDragStart={() => onDragStart(p.id)}
                    onDragOver={(e) => onDragOver(e, p.id)}
                    onDrop={(e) => onDrop(e, p.id)}
                    onDragEnd={onDragEnd}
                    style={{
                      background: flagColors.bg,
                      border: `1px solid ${flagColors.border}`,
                      borderRadius: '4px', marginBottom: '5px',
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center',
                      gap: '4px', padding: '10px',
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <button onClick={() => moveUp(idx)} aria-label="Up" style={{
                          background: 'transparent', border: 'none',
                          color: flagColors.color !== C.text ? flagColors.color : C.accent,
                          cursor: 'pointer', padding: '2px', display: 'flex',
                        }}><ChevronUp size={16} /></button>
                        <button onClick={() => moveDown(idx)} aria-label="Down" style={{
                          background: 'transparent', border: 'none',
                          color: flagColors.color !== C.text ? flagColors.color : C.accent,
                          cursor: 'pointer', padding: '2px', display: 'flex',
                        }}><ChevronDown size={16} /></button>
                      </div>

                      <div style={{
                        fontSize: '17px', fontWeight: 700,
                        color: flagColors.color !== C.text ? flagColors.color : C.accent,
                        minWidth: '28px', textAlign: 'center',
                      }}>{rank}</div>

                      <div onClick={() => toggleExpand(p.id)} style={{ flex: 1, cursor: 'pointer', minWidth: 0 }}>
                        <div className="player-name" style={{
                          fontSize: '15px', fontWeight: 600,
                          color: flagColors.color,
                        }}>{p.name}</div>
                        <div style={{
                          display: 'flex', gap: '6px', alignItems: 'center',
                          marginTop: '3px', flexWrap: 'wrap',
                        }}>
                          <span className="pos-badge" style={{
                            background: POS_COLORS[p.pos] || '#666',
                            opacity: (p.unlikely || p.noFit) && !p.target ? 0.6 : 1,
                          }}>{p.pos}</span>
                          <span style={{
                            fontSize: '12px',
                            color: flagColors.color !== C.text ? flagColors.color : C.textMuted,
                          }}>{p.team}</span>
                          <span style={{
                            fontSize: '11px',
                            color: flagColors.color !== C.text ? `${flagColors.color}aa` : C.textDim,
                          }}>· {p.college}</span>
                        </div>
                      </div>

                      {/* Three flag buttons */}
                      <button
                        onClick={() => toggleFlag(p.id, 'target')}
                        title={p.target ? 'Unmark target' : 'Mark as target'}
                        style={{
                          background: 'transparent', border: 'none',
                          color: p.target ? C.target : C.textDim,
                          cursor: 'pointer', padding: '4px', display: 'flex',
                        }}>
                        <Check size={15} />
                      </button>
                      <button
                        onClick={() => toggleFlag(p.id, 'unlikely')}
                        title={p.unlikely ? 'Unmark unlikely' : "Won't reach me"}
                        style={{
                          background: 'transparent', border: 'none',
                          color: p.unlikely ? C.unlikely : C.textDim,
                          cursor: 'pointer', padding: '4px', display: 'flex',
                        }}>
                        {p.unlikely ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                      <button
                        onClick={() => toggleFlag(p.id, 'noFit')}
                        title={p.noFit ? "Unmark doesn't fit" : "Doesn't fit"}
                        style={{
                          background: 'transparent', border: 'none',
                          color: p.noFit ? C.noFit : C.textDim,
                          cursor: 'pointer', padding: '4px', display: 'flex',
                        }}>
                        <X size={15} />
                      </button>

                      <button onClick={() => toggleExpand(p.id)} aria-label={isExpanded ? 'Collapse' : 'Expand'} style={{
                        background: 'transparent', border: 'none',
                        color: C.accent, cursor: 'pointer',
                        padding: '4px', display: 'flex',
                      }}>
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>

                    {isExpanded && (
                      <div style={{
                        padding: '0 14px 14px 14px',
                        borderTop: `1px solid ${C.border}`,
                        marginTop: '4px',
                      }}>
                        {/* Tier jump buttons */}
                        <div style={{ marginTop: '12px' }}>
                          <div style={{
                            fontSize: '10px', letterSpacing: '2px',
                            color: C.accent, fontWeight: 700, marginBottom: '6px',
                          }}>JUMP TO TIER</div>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {[1, 2, 3, 4, 5, 6, 7].map(t => (
                              <button
                                key={t}
                                onClick={() => setTier(p.id, t)}
                                className={`tier-jump-btn ${p.tier === t ? 'current' : ''}`}
                              >T{t}</button>
                            ))}
                          </div>
                        </div>

                        <div style={{ marginTop: '14px' }}>
                          <div style={{
                            fontSize: '10px', letterSpacing: '2px',
                            color: C.accent, fontWeight: 700, marginBottom: '6px',
                          }}>COLLEGE PRODUCTION</div>
                          <div style={{ display: 'grid', gap: '3px' }}>
                            {(p.s || []).map((line, i) => (
                              <div key={i} style={{
                                fontSize: '12.5px', padding: '3px 0',
                                borderBottom: `1px dotted ${C.border}`,
                                color: C.textMuted, lineHeight: '1.4',
                              }}>{line}</div>
                            ))}
                          </div>
                        </div>

                        <div style={{ marginTop: '14px' }}>
                          <div style={{
                            fontSize: '10px', letterSpacing: '2px',
                            color: C.accent, fontWeight: 700, marginBottom: '6px',
                          }}>SCOUTING REPORT</div>
                          <ScoutingSection
                            playerId={p.id}
                            scoutingUrl={scoutingUrl}
                            scoutingCache={scoutingCache}
                            scoutingStatus={scoutingStatus}
                            scoutingError={scoutingError}
                          />
                        </div>

                        <div style={{ marginTop: '14px' }}>
                          <div style={{
                            fontSize: '10px', letterSpacing: '2px',
                            color: C.accent, fontWeight: 700, marginBottom: '6px',
                          }}>MY NOTES</div>
                          <textarea
                            value={p.userNote || ''}
                            onChange={(e) => updatePlayer(p.id, { userNote: e.target.value })}
                            placeholder="Add your own notes..."
                          />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        <div style={{
          textAlign: 'center', padding: '16px',
          fontSize: '10px', color: C.textDim, letterSpacing: '2px',
        }}>BELLEVIEW BADGERS · DYNASTY · EVW · {players.length} PLAYERS</div>
      </div>
    </div>
  );
}
