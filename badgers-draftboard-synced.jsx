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
  { id: 'love', tier: 1, name: 'Jeremiyah Love', pos: 'RB', team: 'ARI', college: 'Notre Dame', pick: 3, s: ['2023: 64-503-7TD, 7.9 YPC', '2024: 162-1121-17TD, 6.9 YPC | 28 rec, 237', '2025: 170-1125-14TD, 6.6 YPC | 27 rec, 237'] },
  { id: 'mendoza', tier: 1, name: 'Fernando Mendoza', pos: 'QB', team: 'LV', college: 'Indiana', pick: 1, s: ['2023 (Cal): 3,004 yds, 17 TD, 6 INT', '2024 (Cal): 3,004 yds, 16 TD, 6 INT', '2025 (IND): 3,724 yds, 35 TD, 6 INT, 70.7%'] },
  { id: 'tate', tier: 1, name: 'Carnell Tate', pos: 'WR', team: 'TEN', college: 'Ohio State', pick: 4, s: ['2023: 18-307-1TD', '2024: 52-733-4TD', '2025: 52-1156-12TD'] },
  { id: 'tyson', tier: 1, name: 'Jordyn Tyson', pos: 'WR', team: 'NO', college: 'Arizona State', pick: 8, s: ['2022 (CU): 8-124-1TD', '2023: knee injury, DNP', '2024 (ASU): 75-1101-10TD', '2025 (ASU): 71-1005-8TD'] },
  { id: 'lemon', tier: 1, name: 'Makai Lemon', pos: 'WR', team: 'PHI', college: 'USC', pick: 20, s: ['2023: 23-314-0TD', '2024: 52-764-6TD', '2025: 79-1156-11TD — Biletnikoff'] },

  { id: 'price', tier: 2, name: 'Jadarian Price', pos: 'RB', team: 'SEA', college: 'Notre Dame', pick: 32, s: ['2023: Achilles, DNP', '2024: 108-746-7TD, 6.9 YPC', '2025: 113-674-11TD, 6.0 YPC'] },
  { id: 'concepcion', tier: 2, name: 'KC Concepcion', pos: 'WR', team: 'CLE', college: 'Texas A&M', pick: 24, s: ['2023 (NCST): 71-839-10TD', '2024 (NCST): 40-460-1TD', '2025 (TAMU): 55-661-8TD'] },
  { id: 'sadiq', tier: 2, name: 'Kenyon Sadiq', pos: 'TE', team: 'NYJ', college: 'Oregon', pick: 16, s: ['2023: 2-16-0TD', '2024: 24-308-2TD', '2025: 36-419-5TD'] },
  { id: 'simpson', tier: 2, name: 'Ty Simpson', pos: 'QB', team: 'LAR', college: 'Alabama', pick: 13, s: ['2023-24: backup', '2025: 2,824 yds, 28 TD, 4 INT, 71.4%'] },
  { id: 'cooper', tier: 2, name: 'Omar Cooper Jr.', pos: 'WR', team: 'NYJ', college: 'Indiana', pick: 30, s: ['2023: 12-220-2TD', '2024: 45-727-7TD', '2025: 74-933-9TD'] },

  { id: 'lane', tier: 3, name: 'Ja\'Kobi Lane', pos: 'WR', team: 'BAL', college: 'USC', pick: 80, s: ['2023: 2-28-0TD', '2024: 46-525-12TD (13g)', '2025: 47-810-6TD'] },
  { id: 'singleton', tier: 3, name: 'Nicholas Singleton', pos: 'RB', team: 'TEN', college: 'Penn State', pick: 165, s: ['2022: 156-1061-12TD, 6.8 YPC', '2023: 146-752-12TD | 41 rec', '2024: 170-1099-14TD | 24 rec', '2025: 162-729-7TD | 11 rec'] },
  { id: 'fields', tier: 3, name: 'Malachi Fields', pos: 'WR', team: 'NYG', college: 'Notre Dame', pick: 74, s: ['2023 (UVA): 55-811-5TD', '2024 (UVA): 55-808-7TD', '2025 (ND): 56-805-6TD'] },
  { id: 'branch', tier: 3, name: 'Zachariah Branch', pos: 'WR', team: 'ATL', college: 'Georgia', pick: 79, s: ['2023 (USC): 45-503-3TD', '2024 (USC): 46-503-4TD', '2025 (UGA): 50-624-6TD'] },
  { id: 'sarratt', tier: 3, name: 'Elijah Sarratt', pos: 'WR', team: 'BAL', college: 'Indiana', pick: 115, s: ['2023 (JMU): 67-1028-8TD', '2024: 53-957-8TD', '2025: 59-992-7TD'] },
  { id: 'hurst', tier: 3, name: 'Ted Hurst', pos: 'WR', team: 'TB', college: 'Georgia State', pick: 84, s: ['2023: 52-822-7TD', '2024: 67-1047-11TD', '2025: 74-1202-13TD'] },

  { id: 'stribling', tier: 4, name: 'De\'Zhaun Stribling', pos: 'WR', team: 'SF', college: 'Ole Miss', pick: 33, s: ['2023 (WSU): 63-729-4TD', '2024: 34-488-3TD', '2025: 54-800-6TD'] },
  { id: 'douglas', tier: 4, name: 'Caleb Douglas', pos: 'WR', team: 'MIA', college: 'Texas Tech', pick: 75, s: ['2023: 11-154-1TD', '2024: 40-670-5TD', '2025: 52-853-7TD'] },
  { id: 'bernard', tier: 4, name: 'Germie Bernard', pos: 'WR', team: 'PIT', college: 'Alabama', pick: 47, s: ['2023 (UW): 41-419-1TD', '2024 (UW): 50-685-5TD', '2025 (BAMA): 60-813-7TD'] },
  { id: 'boston', tier: 4, name: 'Denzel Boston', pos: 'WR', team: 'CLE', college: 'Washington', pick: 39, s: ['2023: 23-319-6TD', '2024: 63-834-9TD', '2025: 60-821-12TD'] },
  { id: 'brazzell', tier: 4, name: 'Chris Brazzell II', pos: 'WR', team: 'CAR', college: 'Tennessee', pick: 83, s: ['2023 (Tul): 40-711-5TD', '2024: 24-422-4TD', '2025: 46-645-6TD'] },
  { id: 'coleman-jonah', tier: 4, name: 'Jonah Coleman', pos: 'RB', team: 'DEN', college: 'Washington', pick: 108, s: ['2023 (ARI): 147-871-7TD', '2024 (UW): 195-1053-10TD', '2025 (UW): 203-1128-11TD'] },
  { id: 'lance', tier: 4, name: 'Bryce Lance', pos: 'WR', team: 'NO', college: 'NDSU', pick: 136, s: ['2023: 33-605-11TD', '2024: 48-757-7TD', '2025: 52-821-9TD'] },
  { id: 'williams-antonio', tier: 4, name: 'Antonio Williams', pos: 'WR', team: 'WAS', college: 'Clemson', pick: 71, s: ['2023: 20-351-4TD', '2024: 75-904-11TD', '2025: 70-832-6TD'] },

  { id: 'thompson', tier: 5, name: 'Brenen Thompson', pos: 'WR', team: 'LAC', college: 'Mississippi State', pick: 105, s: ['2024: 40-707-6TD', '2025: 52-882-9TD'] },
  { id: 'bell-skyler', tier: 5, name: 'Skyler Bell', pos: 'WR', team: 'BUF', college: 'UConn', pick: 125, s: ['2024: 54-698-6TD', '2025: 52-717-5TD'] },
  { id: 'allen-kaytron', tier: 5, name: 'Kaytron Allen', pos: 'RB', team: 'WAS', college: 'Penn State', pick: 187, s: ['2024: 195-1108-8TD', '2025: 232-1182-12TD'] },
  { id: 'claiborne', tier: 5, name: 'Demond Claiborne', pos: 'RB', team: 'MIN', college: 'Wake Forest', pick: 198, s: ['2024: 233-1049-11TD', '2025: 198-1031-10TD'] },
  { id: 'johnson-emmett', tier: 5, name: 'Emmett Johnson', pos: 'RB', team: 'KC', college: 'Nebraska', pick: 161, s: ['2024: 124-627-5TD', '2025: 210-1222-11TD'] },
  { id: 'bell-chris', tier: 5, name: 'Chris Bell', pos: 'WR', team: 'MIA', college: 'Louisville', pick: 94, s: ['2024: 54-824-6TD', '2025: 60-925-8TD'] },
  { id: 'thomas', tier: 5, name: 'Zavion Thomas', pos: 'WR', team: 'CHI', college: 'LSU', pick: 89, s: ['2024: 32-432-2TD', '2025: 45-612-4TD'] },
  { id: 'black', tier: 5, name: 'Kaelon Black', pos: 'RB', team: 'SF', college: 'Indiana', pick: 90, s: ['2024: 101-472-4TD', '2025: 143-759-6TD'] },
  { id: 'wetjen', tier: 5, name: 'Kaden Wetjen', pos: 'WR', team: 'PIT', college: 'Iowa', pick: 121, s: ['2025: 54-722-6TD'] },
  { id: 'young', tier: 5, name: 'Colbie Young', pos: 'WR', team: 'CIN', college: 'Georgia', pick: 140, s: ['2025: 40-588-5TD'] },

  { id: 'washington-mike', tier: 6, name: 'Mike Washington Jr.', pos: 'RB', team: 'LV', college: 'Arkansas', pick: 122, s: ['2025: 146-822-9TD'] },
  { id: 'randall', tier: 6, name: 'Adam Randall', pos: 'RB', team: 'BAL', college: 'Clemson', pick: 174, s: ['2025: RB — 152-819-8TD'] },
  { id: 'mcgowan', tier: 6, name: 'Seth McGowan', pos: 'RB', team: 'IND', college: 'Kentucky', pick: 237, s: ['2025: 189-1025-11TD'] },
  { id: 'miller-jam', tier: 6, name: 'Jam Miller', pos: 'RB', team: 'NE', college: 'Alabama', pick: 245, s: ['2025: 164-882-9TD'] },
  { id: 'heidenreich', tier: 6, name: 'Eli Heidenreich', pos: 'RB', team: 'PIT', college: 'Navy', pick: 230, s: ['Service academy'] },
  { id: 'law', tier: 6, name: 'Kendrick Law', pos: 'WR', team: 'DET', college: 'Kentucky', pick: 168, s: ['2025: 49-632-5TD'] },
  { id: 'allen-cyrus', tier: 6, name: 'Cyrus Allen', pos: 'WR', team: 'KC', college: 'Cincinnati', pick: 176, s: ['2025: 45-678-5TD'] },
  { id: 'coleman-kevin', tier: 6, name: 'Kevin Coleman Jr.', pos: 'WR', team: 'MIA', college: 'Missouri', pick: 177, s: ['2025: 52-712-6TD'] },
  { id: 'virgil', tier: 6, name: 'Reggie Virgil', pos: 'WR', team: 'ARI', college: 'Texas Tech', pick: 143, s: ['2025: 48-833-7TD'] },
  { id: 'brown-barion', tier: 6, name: 'Barion Brown', pos: 'WR', team: 'NO', college: 'LSU', pick: 190, s: ['2025: 38-567-4TD'] },
  { id: 'cameron', tier: 6, name: 'Josh Cameron', pos: 'WR', team: 'JAX', college: 'Baylor', pick: 191, s: ['2025: 55-808-7TD'] },
  { id: 'benson', tier: 6, name: 'Malik Benson', pos: 'WR', team: 'LV', college: 'Oregon', pick: 195, s: ['2025: 42-628-4TD'] },
  { id: 'daniels-cj', tier: 6, name: 'CJ Daniels', pos: 'WR', team: 'LAR', college: 'Miami', pick: 197, s: ['2025: 48-712-6TD'] },
  { id: 'henderson-emm', tier: 6, name: 'Emmanuel Henderson Jr.', pos: 'WR', team: 'SEA', college: 'Kansas', pick: 199, s: ['2025: 38-588-4TD'] },
  { id: 'williams-cj', tier: 6, name: 'CJ Williams', pos: 'WR', team: 'JAX', college: 'Stanford', pick: 203, s: ['2025: 42-545-3TD'] },
  { id: 'bond', tier: 6, name: 'Lewis Bond', pos: 'WR', team: 'HOU', college: 'Boston College', pick: 204, s: ['2025: 56-729-5TD'] },
  { id: 'smith-anthony', tier: 6, name: 'Anthony Smith', pos: 'WR', team: 'DAL', college: 'East Carolina', pick: 218, s: ['2025: 60-882-7TD'] },
  { id: 'burks', tier: 6, name: 'Deion Burks', pos: 'WR', team: 'IND', college: 'Oklahoma', pick: 254, s: ['2025: 38-512-4TD'] },

  { id: 'beck', tier: 7, name: 'Carson Beck', pos: 'QB', team: 'ARI', college: 'Miami', pick: 65, s: ['2024 (UGA): 3485-28-12', '2025 (Miami): 3200-22-8'] },
  { id: 'allar', tier: 7, name: 'Drew Allar', pos: 'QB', team: 'PIT', college: 'Penn State', pick: 76, s: ['Multi-year PSU starter'] },
  { id: 'klubnik', tier: 7, name: 'Cade Klubnik', pos: 'QB', team: 'NYJ', college: 'Clemson', pick: 110, s: ['Clemson starter'] },
  { id: 'payton', tier: 7, name: 'Cole Payton', pos: 'QB', team: 'PHI', college: 'NDSU', pick: 178, s: ['NDSU prospect'] },
  { id: 'green', tier: 7, name: 'Taylen Green', pos: 'QB', team: 'CLE', college: 'Arkansas', pick: 182, s: ['Arkansas starter'] },
  { id: 'kaliakmanis', tier: 7, name: 'Athan Kaliakmanis', pos: 'QB', team: 'WAS', college: 'Rutgers', pick: 223, s: ['Rutgers starter'] },
  { id: 'morton', tier: 7, name: 'Behren Morton', pos: 'QB', team: 'NE', college: 'Texas Tech', pick: 234, s: ['Texas Tech starter'] },
  { id: 'nussmeier', tier: 7, name: 'Garrett Nussmeier', pos: 'QB', team: 'KC', college: 'LSU', pick: 249, s: ['LSU starter'] },
  { id: 'stowers', tier: 7, name: 'Eli Stowers', pos: 'TE', team: 'PHI', college: 'Vanderbilt', pick: 54, s: ['2024: 49-638-5TD', '2025: 58-729-6TD'] },
  { id: 'boerkircher', tier: 7, name: 'Nate Boerkircher', pos: 'TE', team: 'JAX', college: 'Texas A&M', pick: 56, s: ['Limited TE prod'] },
  { id: 'klein', tier: 7, name: 'Marlin Klein', pos: 'TE', team: 'HOU', college: 'Michigan', pick: 59, s: ['2025: 32-428-3TD'] },
  { id: 'klare', tier: 7, name: 'Max Klare', pos: 'TE', team: 'LAR', college: 'Ohio State', pick: 61, s: ['2024: 51-685-4TD', '2025: 46-595-5TD'] },
  { id: 'roush', tier: 7, name: 'Sam Roush', pos: 'TE', team: 'CHI', college: 'Stanford', pick: 69, s: ['2025: 38-423-3TD'] },
  { id: 'delp', tier: 7, name: 'Oscar Delp', pos: 'TE', team: 'NO', college: 'Georgia', pick: 73, s: ['2024: 21-318-4TD', '2025: 34-482-6TD'] },
  { id: 'kacmarek', tier: 7, name: 'Will Kacmarek', pos: 'TE', team: 'MIA', college: 'Ohio State', pick: 87, s: ['Limited prod'] },
  { id: 'raridon', tier: 7, name: 'Eli Raridon', pos: 'TE', team: 'NE', college: 'Notre Dame', pick: 95, s: ['2024: 21-244-3TD', '2025: 36-412-4TD'] },
  { id: 'hibner', tier: 7, name: 'Matthew Hibner', pos: 'TE', team: 'BAL', college: 'SMU', pick: 133, s: ['SMU TE'] },
  { id: 'joly', tier: 7, name: 'Justin Joly', pos: 'TE', team: 'DEN', college: 'NC State', pick: 152, s: ['2024: 40-482-5TD', '2025: 55-656-6TD'] },
  { id: 'koziol', tier: 7, name: 'Tanner Koziol', pos: 'TE', team: 'JAX', college: 'Houston', pick: 164, s: ['Limited prod'] },
  { id: 'nowakowski', tier: 7, name: 'Riley Nowakowski', pos: 'TE', team: 'PIT', college: 'Indiana', pick: 169, s: ['Limited prod'] },
  { id: 'royer', tier: 7, name: 'Joe Royer', pos: 'TE', team: 'CLE', college: 'Cincinnati', pick: 170, s: ['Limited prod'] },
  { id: 'cuevas', tier: 7, name: 'Josh Cuevas', pos: 'TE', team: 'BAL', college: 'Alabama', pick: 173, s: ['Limited prod'] },
  { id: 'traore', tier: 7, name: 'Seydou Traore', pos: 'TE', team: 'MIA', college: 'Mississippi State', pick: 180, s: ['Limited prod'] },
  { id: 'sharp', tier: 7, name: 'Bauer Sharp', pos: 'TE', team: 'TB', college: 'LSU', pick: 185, s: ['Limited prod'] },
  { id: 'endries', tier: 7, name: 'Jack Endries', pos: 'TE', team: 'CIN', college: 'Texas', pick: 221, s: ['Limited prod'] },
  { id: 'kanak', tier: 7, name: 'Jaren Kanak', pos: 'TE', team: 'TEN', college: 'Oklahoma', pick: 225, s: ['Limited prod'] },
  { id: 'ryan', tier: 7, name: 'Carsen Ryan', pos: 'TE', team: 'CLE', college: 'BYU', pick: 248, s: ['Limited prod'] },
  { id: 'bentley', tier: 7, name: 'Dallen Bentley', pos: 'TE', team: 'DEN', college: 'Utah', pick: 256, s: ['Limited prod'] },
  { id: 'bredeson', tier: 7, name: 'Max Bredeson', pos: 'FB', team: 'MIN', college: 'Michigan', pick: 159, s: ['Fullback role'] },
  { id: 'smack', tier: 7, name: 'Trey Smack', pos: 'K', team: 'GB', college: 'Florida', pick: 216, s: ['Kicker'] },
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
    scoutingUrl: scoutingUrl || '',
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
    scoutingUrl: data.scoutingUrl || '',
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

  if (sections.length === 0 && !data.verdict) {
    return (
      <div style={{ fontSize: '12px', color: C.textDim, lineHeight: '1.5' }}>
        Scouting entry found for <code>{playerId}</code>, but it does not use a recognized field.
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
  const [scoutingUrl, setScoutingUrl] = useState('');
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
    }, 500);

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
    if (!confirm('Reset all rankings, tiers, notes, flags, and scouting URL to default? Cannot be undone.')) return;
    setPlayers(INITIAL.map(p => ({ ...p })));
    setScoutingUrl('');
    setScoutingCache(null);
    setScoutingStatus('no-url');
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
        {!scoutingUrl && (
          <div style={{
            padding: '10px 12px', marginBottom: '14px',
            background: `${C.warning}1a`, border: `1px solid ${C.warning}55`,
            borderRadius: '4px', fontSize: '12px',
            color: C.warning, lineHeight: '1.5',
            display: 'flex', alignItems: 'flex-start', gap: '8px',
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '1px' }} />
            <div>
              <strong>Scouting reports not loaded.</strong> Tap ⚙ to set the Gist URL.
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
