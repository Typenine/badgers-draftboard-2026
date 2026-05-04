const fs = require('fs');
const d = JSON.parse(fs.readFileSync('public/scouting-reports.json','utf8'));

function add(id, obj) {
  if (!d[id]) d[id] = obj;
}

// Tier 3 - 3 paragraphs
add('beck', {
  shortReport: "A pure-pocket quarterback whose 30-12 TD-to-INT ratio and 72.4% completion in 2025 at Miami is elite accuracy, but whose -18 rush yards and 1 career rushing TD give him zero fantasy floor. Beck is the archetype of the modern game-manager QB — efficient, careful with the ball, productive in a clean pocket, and completely immobile. In superflex leagues, the 30 passing TDs give him streaming value as a bye-week fill-in. In single-QB, the lack of rushing makes him unstartable.\n\nThe Miami transition in 2025 is instructive. Beck moved from Georgia's conservative pro-style offense to Miami's spread attack, and his completion percentage jumped from 64.2% to 72.4% while his INTs stayed flat at 12. That suggests the accuracy improvement was system-driven — more designed short passes, more RPOs, more easy completions — rather than genuine progression as a passer. The TDs increased from 28 to 30, but the yardage only climbed from 3,485 to 3,813, which means the efficiency gains came on volume rather than explosive plays. That's the profile of a dink-and-dunk quarterback who needs a system to create open receivers rather than one who creates separation with his arm.\n\nThe 12 INTs in both 2024 and 2025 are the hidden concern. Even with elite completion percentages, Beck throws interceptions at a rate that suggests he forces balls into tight windows when the primary read isn't open. That's a negative habit that NFL defenses will exploit — the windows are tighter in the NFL, and quarterbacks who can't improvise or create off-schedule become turnover machines. The immobility compounds this problem because he can't extend plays to find secondary options.",
  strengths: [
    "The 72.4% completion in 2025 is elite accuracy that reflects excellent ball placement and timing on intermediate routes.",
    "The 30 passing TDs show he can produce in volume when the system creates open receivers.",
    "The careful ball security is real — 12 INTs on 400+ attempts is a manageable rate for a pocket passer."
  ],
  weaknesses: [
    "The -18 rushing yards and 1 career rushing TD give him zero fantasy floor. In weeks where the passing game struggles, he gives you a QB3 line with nothing to fall back on.",
    "The 12 INTs in consecutive seasons suggest he forces throws into tight windows rather than checking down, which NFL defenses will exploit.",
    "The dink-and-dunk profile means his passing production is system-dependent. He needs a spread offense with designed short passes to produce, not a vertical attack that asks him to create."
  ],
  nflFit: "Backup QB in a West Coast or spread system. The accuracy is his calling card but the immobility and INT rate cap his ceiling. Not a fantasy asset in any format.\n\nThe accuracy is translatable to any timing-based passing game. Beck can operate efficiently in a system that creates open receivers with scheme rather than asking him to create with his arm.\n\nThe immobility is the dealbreaker for fantasy. Quarterbacks who don't run have no floor in bad passing weeks, and Beck's -18 rush yards means he'll give you QB3 lines when the passing game struggles.",
  comp: "Mac Jones — accurate pocket passer with limited mobility whose fantasy value is entirely dependent on system and supporting cast. Like Jones, Beck will have efficient seasons in the right offense and look unplayable in the wrong one.\n\nThe Jones comparison is about the system-dependent pocket passer profile. Jones was productive in New England's spread system but regressed when the supporting cast deteriorated. Beck has a similar profile with better accuracy but worse mobility.",
  dynastyOutlook: "QB4/5 in superflex. Unrosterable in single-QB.\n\nThe passing TDs (30 in 2025) give him streaming value in superflex as a bye-week fill-in, but the immobility and system-dependence make him a risky weekly starter.\n\nThe INT rate (12 in consecutive seasons) is the long-term concern. If NFL defenses force him to throw into tighter windows, the turnovers will increase and his efficiency will decline.",
  badgersFit: "Beck is a system QB with zero rushing floor. The 72.4% completion and 30 TDs look good until you see -18 rush yards and 12 INTs. In superflex he's a streaming option at best. In single-QB he's unrosterable. At pick 3.65 he's fine as a QB3 stash but don't expect weekly starts.\n\nThe Badgers-specific concern is the system-dependence. Beck thrived in Miami's spread but struggled in Georgia's pro-style. If his NFL landing spot doesn't feature designed short passes and RPOs, his production will crater.\n\nThe 12 INTs are the dealbreaker. Even with elite completion percentages, the turnover rate suggests he forces throws rather than checking down. That habit gets worse in the NFL.",
  verdict: "Accurate pocket passer with zero rushing floor. Streaming superflex option only."
});

// Tier 4 - 3 paragraphs
add('allar', {
  shortReport: "A classic pocket passer whose 3,327 yards and 24 TDs in 2024 showed legitimate arm talent, but whose 2025 season ended in November with a broken ankle that required season-ending surgery. Allar's career totals at Penn State (7,402 yards, 61 TDs) are solid but not spectacular for a four-year starter at a program with elite offensive talent. His 63.4% completion in 2024 is modest for a modern quarterback, and his 8 INTs suggest the decision-making needs refinement.\n\nThe broken ankle in November 2025 is the defining concern for his dynasty value. Ankle injuries for quarterbacks affect plant-foot mechanics, pocket mobility, and the ability to evade rushers — all critical skills for a pocket passer whose value is rooted in timing and accuracy. The recovery timeline is uncertain, and even a full recovery typically costs a quarterback 6-12 months of development time. That means Allar likely won't be ready for the 2025 NFL season, which pushes his fantasy relevance to 2026 at the earliest and makes him a taxi-squad stash rather than a rosterable asset.\n\nThe rushing production (52 carries for 82 yards and 3 TDs in 2024) is minimal and confirms he's a pure pocket passer. In superflex, that lack of a rushing floor makes him dependent entirely on passing production, which is capped by his modest accuracy and the ankle recovery. In single-QB, he's completely unrosterable. The dynasty play on Allar is betting that the 2024 numbers (24 TDs, 3,327 yards) represent his true level and that the ankle recovers fully, but that's a bet with significant downside.",
  strengths: [
    "The 24 passing TDs in 2024 show legitimate arm talent and the ability to produce in a structured offense.",
    "The Penn State pedigree and four-year starting experience mean he's been coached in a pro-style system that prepares him for NFL concepts.",
    "The 3 rushing TDs in 2024 show he's functional near the goal line, which adds a small fantasy ceiling."
  ],
  weaknesses: [
    "The broken ankle (Nov 2025, season-ending surgery) is a major injury concern that will cost him development time and may permanently affect his plant-foot mechanics.",
    "The modest completion percentage (63.4% in 2024) suggests accuracy limitations that will be exposed against NFL defenses with tighter coverage windows.",
    "The minimal rushing (82 yards in 2024) gives him almost no fantasy floor. In bad passing weeks, he'll give you QB3 lines."
  ],
  nflFit: "Backup QB in a timing-based system. Best in a West Coast offense that maximizes his intermediate accuracy and tolerates his limited mobility.\n\nThe arm talent is legitimate — 24 TDs and 3,327 yards in 2024 show he can drive the ball on outs and seams. But the modest completion percentage (63.4%) and the ankle recovery mean he needs a system that creates open receivers rather than one that asks him to create off-schedule.\n\nThe broken ankle is the timeline concern. Even with full recovery, the lost development time pushes his NFL readiness to 2026, which makes him a taxi-squad-only asset in dynasty.",
  comp: "Andy Dalton — a pocket passer with solid arm talent and limited mobility whose fantasy value is entirely dependent on the system around him. Like Dalton, Allar can manage a game but can't elevate a bad offense.\n\nThe Dalton comparison is about the system-dependent pocket passer profile. Dalton had productive seasons in Cincinnati because of the supporting cast but struggled when the talent around him declined. Allar has a similar profile with the added concern of a significant injury.",
  dynastyOutlook: "QB5/6 in superflex. Taxi squad stash only. The broken ankle pushes his NFL timeline to 2026.\n\nThe Penn State pedigree and 24-TD 2024 season give him a path to relevance if the ankle recovers fully, but the modest accuracy and zero rushing floor cap his ceiling at QB3 in superflex.\n\nThe injury risk is the deciding factor. Even a full recovery typically costs 6-12 months of development time for a quarterback, which means he's unlikely to see meaningful NFL snaps before 2026.",
  badgersFit: "Allar is a high-risk stash whose 24-TD 2024 season shows arm talent but whose broken ankle makes him a 2026 proposition at best. At pick 4.76 he's a taxi squad dart throw — if the ankle heals and he lands in a timing-based system, he could be a streaming QB3. If not, you've lost a fourth-round pick on a player who may never play.\n\nThe Badgers-specific concern is the timeline. Dynasty managers need players who contribute within 1-2 years. Allar's broken ankle means he may not contribute until 2026 or 2027, which is a long wait for minimal upside.\n\nThe zero rushing floor makes him unrosterable in single-QB and a risky taxi stash in superflex. Only draft if you have deep taxi squad space and patience.",
  verdict: "Pocket passer with broken ankle. Taxi squad stash with QB3 upside if he recovers."
});

// Tier 6 players - 1-2 paragraphs each
add('washington-mike', {
  shortReport: "A one-year wonder whose 146-822-9TD rushing line at Arkansas in 2025 is productive but comes with significant context concerns. Washington was a backup until the 2025 season, when he finally earned a starting role and produced solid SEC numbers. The 5.6 YPC is good-not-great for a feature back, and the 12 catches for 89 yards show minimal receiving value. He's a two-down grinder whose fantasy ceiling is capped by the lack of a passing-game role.\n\nThe one-year sample is the primary concern. One productive season as a starter is better than none, but NFL teams prefer backs with multi-year track records of production and durability. The 822 yards on 146 carries suggests he handled a moderate workload well, but the 9 TDs are the fantasy hook — a back who scores near the goal line has standalone value even in a committee. The risk is that his role was opportunity-driven rather than skill-driven, and a new coaching staff or backfield competition could relegate him to a backup role.",
  strengths: ["The 9 rushing TDs on 146 carries (6.2% TD rate) shows he can finish near the goal line.", "The 5.6 YPC is solid SEC production that suggests he can handle a moderate workload."],
  weaknesses: ["The one-year sample (146 carries) is too small to project with confidence.", "The 12 catches for 89 yards gives him almost no PPR floor."],
  nflFit: "Early-down committee back with goal-line value. Best in a power-run scheme that feeds him between the tackles.",
  comp: "Zamir White — a two-down grinder with modest receiving ability whose fantasy value is TD-dependent.",
  dynastyOutlook: "RB4/5 with TD-dependent value. The one-year sample introduces significant risk.",
  badgersFit: "Washington is a one-year producer whose 9 TDs are enticing but whose 12 catches and one-year sample are red flags. At pick 6.122 he's a bench stash with TD upside.",
  verdict: "One-year SEC grinder with goal-line value. TD-dependent RB4/5."
});

add('virgil', {
  shortReport: "A small-school deep threat whose 48-833-7TD line in 2025 translates to a 17.4 YPR that screams big-play ability. Virgil's production came at Texas Tech in the Air Raid system, which inflates receiver numbers significantly — the Red Raiders throw the ball 50+ times per game, creating volume that won't exist in most NFL offenses. The 17.4 YPR is legitimate deep-ball skill, but the Air Raid inflation means his 48 catches are more like 30 catches in a balanced offense.\n\nThe deep-ball tracking is his translatable skill. Virgil wins downfield by adjusting to the ball in flight, using late hands to avoid tipping off defenders, and finishing through contact. Those skills work in any system that takes vertical shots. The question is whether he can run a full route tree or whether he's a one-dimensional deep specialist whose snap count is capped at 30-40% of offensive snaps.",
  strengths: ["The 17.4 YPR reflects genuine deep-ball ability and ball-tracking skill.", "The 7 TDs on 48 catches shows he can finish in the red zone."],
  weaknesses: ["The Air Raid system inflates his production — 48 catches in the Air Raid is equivalent to 30 in a balanced offense.", "The small-school competition raises questions about whether his separation skills translate to NFL-caliber corners."],
  nflFit: "Deep-ball Z-receiver in a vertical offense. Best as a situational shot-play specialist.",
  comp: "Darius Slayton — deep-ball speed with inconsistent volume.",
  dynastyOutlook: "WR6/7 with boom weeks. The deep-ball ability is real but the volume is inconsistent.",
  badgersFit: "Virgil is a deep-ball dart throw whose 17.4 YPR is legit but whose Air Raid-inflated production is misleading. At pick 6.143 he's a late-round stash for return-yard leagues or best-ball formats.",
  verdict: "Air Raid deep threat with big-play upside. Boom/bust WR6/7."
});

add('law', {
  shortReport: "A Kentucky slot receiver whose 49-632-5TD in 2025 with a 12.9 YPR is modest but efficient production. Law operates primarily in the intermediate areas of the field, running option routes, crossers, and dig routes that create separation with quickness and route precision rather than speed. The 3 rush attempts for 18 yards and 6 kick returns for 142 yards add special-teams value that could earn him a roster spot even if his receiving production doesn't translate.\n\nThe Kentucky offense is run-heavy, which suppressed Law's volume — he was the second or third option in a ground-first attack. In a pass-heavy NFL offense, his target share would likely increase, but his physical profile (modest size and speed) suggests he'll struggle to separate against NFL-caliber defenders. The special-teams contribution is his floor — return ability keeps him on rosters.",
  strengths: ["The route-running precision creates separation in the intermediate game.", "The special-teams value (KR) gives him a roster floor most late-round receivers lack."],
  weaknesses: ["The modest YPR (12.9) shows he doesn't win downfield — he's a possession slot with limited explosive ability.", "The 49 catches in a run-heavy offense is modest volume that may not translate to NFL targets."],
  nflFit: "Slot/returner in a West Coast system. Best as a depth receiver who contributes on special teams.",
  comp: "Ray-Ray McCloud — slot/return specialist with limited receiving upside.",
  dynastyOutlook: "WR7. The special-teams value keeps him on rosters but not in fantasy lineups.",
  badgersFit: "Law is a special-teams player with modest receiving upside. At pick 6.168 he's a hard pass in standard formats but viable in return-yard leagues.",
  verdict: "Slot/returner with limited fantasy upside. Special-teams depth."
});

add('randall', {
  shortReport: "A Clemson bruiser whose 152-819-8TD in 2025 (5.4 YPC) shows solid power-running ability in the ACC. Randall is a between-the-tackles grinder whose fantasy value is concentrated in goal-line situations and short-yardage conversions. The 9 catches for 61 yards gives him almost no PPR floor, and the one-year sample raises questions about whether his production was driven by opportunity or skill.\n\nThe one-year concern is real — he didn't produce significant numbers before 2025, which suggests he may have been a backup who got a shot due to injuries or roster turnover ahead of him. The 8 TDs on 152 carries is a solid rate that shows he can finish near the goal line, but the 819 yards on 152 carries is modest efficiency that won't excite NFL scouts.",
  strengths: ["The 8 rushing TDs on 152 carries shows goal-line finishing ability.", "The 5.4 YPC is solid ACC production that suggests he can handle a moderate workload."],
  weaknesses: ["The one-year sample is too small to project with confidence — he may have been an opportunity-driven producer.", "The 9 catches for 61 yards gives him almost no PPR value."],
  nflFit: "Short-yardage and goal-line back in a committee. Best as a situational power runner.",
  comp: "Trey Benson — a power back with limited receiving ability.",
  dynastyOutlook: "RB5 with TD-dependent value. The one-year sample introduces risk.",
  badgersFit: "Randall is a power back with 8 TDs but a one-year sample. At pick 6.174 he's a late-round TD dart throw.",
  verdict: "Power back with goal-line value. TD-dependent RB5."
});

add('allen-cyrus', {
  shortReport: "A Georgia Tech transfer who found a role at Cincinnati in 2025, producing 45-678-5TD with a 15.1 YPR that reflects deep-ball ability. Allen's career arc — Georgia Tech to Cincinnati — shows he couldn't earn consistent targets in Atlanta's option-heavy attack but found more opportunities in a balanced spread offense. The 1 rush for 7 yards confirms he's a pure receiver with no rushing floor.\n\nThe 15.1 YPR is the positive signal — it shows he wins downfield on vertical routes, which is a translatable skill at the NFL level. But the 45 catches on a Cincinnati team that threw the ball frequently is modest volume, suggesting he was a complementary piece rather than a focal point. The 5 TDs are solid but not spectacular for a receiver with his YPR.",
  strengths: ["The 15.1 YPR shows genuine deep-ball ability on vertical routes.", "The Cincinnati transfer shows he can produce in a spread passing offense."],
  weaknesses: ["The 45 catches is modest volume that suggests a complementary role rather than a primary target.", "The Georgia Tech failure raises questions about whether his skill set is limited to specific offensive schemes."],
  nflFit: "Deep-ball Z-receiver in a vertical offense. Best as a situational shot-play specialist.",
  comp: "Kadarius Toney — a vertical threat with limited but explosive production.",
  dynastyOutlook: "WR6/7 with boom weeks. The deep-ball ability is real but the volume is inconsistent.",
  badgersFit: "Allen is a deep-ball stash whose 15.1 YPR is intriguing but whose 45 catches are modest. At pick 6.176 he's a late-round dart.",
  verdict: "Deep-ball specialist with modest volume. Boom/bust WR6/7."
});

add('coleman-kevin', {
  shortReport: "A Missouri slot receiver whose 52-712-6TD in 2025 with a 13.7 YPR shows solid efficiency and TD production. Coleman's 2 rushes for 11 yards and 5 punt returns for 38 yards add minimal special-teams value. He's a reliable chain-mover who wins in the intermediate game with route precision and reliable hands.\n\nThe Missouri offense spreads the ball around, which capped Coleman's individual volume — 52 catches on a team with multiple NFL-caliber receivers is a solid complementary role. The 6 TDs on 52 catches (11.5% rate) is above average and suggests he has a nose for the end zone, but the modest YPR (13.7) confirms he's not a deep-ball threat. His NFL ceiling is as a WR4/5 in a spread system.",
  strengths: ["The 6 TDs on 52 catches shows above-average red-zone finishing.", "The reliable hands and route precision make him a trustworthy chain-mover."],
  weaknesses: ["The 13.7 YPR is modest and shows no deep-ball ability.", "The 52 catches is complementary volume that may not increase at the NFL level."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a reliable chain-mover on third downs.",
  comp: "Kendrick Bourne — a reliable slot with modest volume and occasional TD upside.",
  dynastyOutlook: "WR6/7 with limited upside. The TD production is the only fantasy hook.",
  badgersFit: "Coleman is a chain-mover with 6 TDs but modest upside. At pick 6.177 he's a depth stash.",
  verdict: "Reliable slot with modest volume and TD upside. WR6/7."
});

add('payton', {
  shortReport: "An FCS dual-threat quarterback whose 2,719 yards, 16 TDs, 4 INTs, and 72.0% completion in 2025 at NDSU is efficient but volume-limited, while his 136-777-13TD rushing line is the fantasy differentiator. Payton's 13 rushing TDs are more than most NFL quarterbacks score in a season — that's legitimate fantasy gold in superflex formats.\n\nThe NDSU context is the key evaluation factor. The Bison run a pro-style offense with play-action concepts that prepare quarterbacks for NFL route trees, but the FCS competition is significantly weaker than FBS. Payton's 72.0% completion is inflated by the competition level, and his 2,719 passing yards are modest for a 16-game season. The 4 INTs on 300+ attempts shows excellent ball security, but the volume concern is real — can he produce 3,000+ yards against NFL defenses?\n\nThe 777 rushing yards and 13 TDs are the fantasy hook that makes him rosterable regardless of the passing questions. In superflex, a quarterback who scores 10+ rushing TDs per season has a weekly floor that pocket passers can't match. The question is whether the rushing production translates — NFL linebackers are faster and more disciplined than FCS defenders, and designed QB runs are less common at the next level.",
  strengths: ["The 13 rushing TDs are elite fantasy production that gives him a weekly floor in superflex.", "The 72.0% completion shows excellent ball security and efficiency.", "The NDSU pro-style offense prepares him for NFL concepts better than most FCS quarterbacks."],
  weaknesses: ["The 2,719 passing yards is modest volume for a 16-game season.", "The FCS competition level means his completion percentage and passing production will decline significantly at the NFL level.", "The 777 rushing yards may not translate against NFL-caliber pursuit speed."],
  nflFit: "Dual-threat QB in a run-heavy offense. Best in a system that uses designed QB runs and RPOs to maximize his rushing TD production.",
  comp: "Taysom Hill — a run-first quarterback whose fantasy value is concentrated in rushing TDs.",
  dynastyOutlook: "QB5/6 in superflex. The 13 rushing TDs give him streaming value. Not rosterable in single-QB.",
  badgersFit: "Payton is a run-first FCS QB whose 13 rushing TDs are the fantasy hook. At pick 6.178 he's a superflex-only stash with boom weeks.",
  verdict: "FCS dual-threat with elite rushing TD production. Superflex streaming option."
});

add('green', {
  shortReport: "A Boise State transfer who produced 2,714 yards, 19 TDs, 11 INTs, and 60.7% completion in 2025 at Arkansas, with 139-777-8TD rushing. Green is a dual-threat quarterback whose fantasy value is rooted in the 8 rushing TDs and 777 rushing yards — in superflex, that rushing floor gives him a weekly baseline that pocket passers can't match.\n\nThe 19 passing TDs and 60.7% completion are modest numbers that reflect inconsistency as a passer. The 11 INTs on 400+ attempts is a manageable rate but not elite ball security. The 6 games of 300+ passing yards in 2025 show he can produce in volume when the game script favors passing, but the overall profile suggests he's a better runner than passer. In the NFL, that profile limits him to backup or gadget packages unless the passing develops significantly.",
  strengths: ["The 777 rushing yards and 8 TDs give him a fantasy floor that pocket passers can't match.", "The 6 games of 300+ passing yards show he can produce in volume when the game script favors passing."],
  weaknesses: ["The 60.7% completion is below the NFL threshold for consistent starter play.", "The 11 INTs suggest decision-making that needs refinement against better competition.", "The 19 passing TDs is modest production for a starting quarterback in the SEC."],
  nflFit: "Dual-threat backup QB. Best in a run-heavy system that uses designed QB runs and RPOs.",
  comp: "Tyler Huntley — a run-first quarterback with modest passing ability.",
  dynastyOutlook: "QB6 in superflex. The rushing floor gives him streaming value. Not rosterable in single-QB.",
  badgersFit: "Green is a dual-threat QB whose 8 rushing TDs give him superflex value. At pick 6.182 he's a bye-week streamer at best.",
  verdict: "Dual-threat with rushing floor. Superflex streaming option only."
});

add('brown-barion', {
  shortReport: "A Kentucky transfer who found a return specialist role at LSU in 2025, catching 53 balls for 532 yards and 1 TD (10.0 YPR) while adding 6 career kick return TDs including a 99-yarder. Brown's fantasy value is 100% concentrated in his return ability — the 53-532-1 receiving line is replacement-level production that doesn't project to any NFL receiving role.\n\nThe 6 kick return TDs is an SEC record and reflects elite return ability: vision to identify the seam, burst to accelerate through the first wave, and top-end speed to outrun coverage. That skill is translatable to the NFL, where return specialists are always in demand. But return touchdowns regress heavily at the NFL level — 6 in college becomes 0-1 in the pros — which means his fantasy value is almost entirely in return-yard leagues.",
  strengths: ["The 6 career kick return TDs (SEC record) is elite special-teams production.", "The 99-yard return shows top-end speed that translates to any level."],
  weaknesses: ["The 10.0 YPR shows zero deep-ball ability — he's a possession receiver with no explosiveness.", "The 1 TD on 53 catches is negligible scoring production.", "Return TDs regress heavily at the NFL level — 6 becomes 0-1."],
  nflFit: "Return specialist with minimal receiving value. Best as a special-teams contributor.",
  comp: "Mecole Hardman — a return specialist whose early NFL value was on special teams.",
  dynastyOutlook: "WR7 in standard. WR5/6 in return-yard leagues. His value is 100% format-dependent.",
  badgersFit: "Brown is a return specialist only. The 6 KR TDs are impressive but the 53-532-1 receiving is nothing. At pick 6.190 he's only draftable in return-yard leagues.",
  verdict: "Elite return specialist. Return-yard league only."
});

add('cameron', {
  shortReport: "A UCF transfer who produced 55-808-7TD at Baylor in 2025 with a 14.7 YPR that shows solid efficiency and TD production. Cameron is a slot receiver who wins in the intermediate game with quickness and reliable hands. The 2 rushes for 9 yards confirm he's a pure receiver with no rushing upside.\n\nThe 14.7 YPR is above average for a slot receiver and suggests he can stretch the field on intermediate routes — digs, crossers, and seam routes that exploit the soft spot in zone coverage. The 7 TDs on 55 catches (12.7% rate) is solid red-zone production that shows he can finish when targeted near the goal line. But the 55 catches is modest volume for a primary target, suggesting he was a complementary piece in Baylor's offense.",
  strengths: ["The 14.7 YPR shows above-average efficiency for a slot receiver.", "The 7 TDs on 55 catches is solid red-zone finishing."],
  weaknesses: ["The 55 catches is complementary volume that may not increase at the NFL level.", "The UCF-to-Baylor transfer arc suggests he needed a specific system to produce."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a chain-mover on third downs.",
  comp: "Braxton Berrios — a reliable slot with modest volume and occasional TD upside.",
  dynastyOutlook: "WR6/7 with limited upside. The TD production is the only fantasy hook.",
  badgersFit: "Cameron is a slot receiver with 7 TDs but modest upside. At pick 6.191 he's a depth stash.",
  verdict: "Reliable slot with modest volume and TD upside. WR6/7."
});

add('benson', {
  shortReport: "A JUCO-to-Alabama-to-Oregon transfer whose 42-628-4TD in 2025 with a 15.0 YPR shows deep-ball ability. Benson's career arc — three programs in three years — raises questions about his ability to stick in one place, but the 15.0 YPR at Oregon suggests he found a role as a vertical threat. The 1 rush for 6 yards confirms he's a pure receiver.\n\nThe deep-ball ability is his translatable skill. Benson tracks the ball downfield with natural hands and adjusts to underthrown passes, which are skills that work in any vertical offense. But the 42 catches is modest volume that suggests a situational role, and the 4 TDs on 42 catches (9.5% rate) is below average for a deep-ball specialist. The three-program arc is a red flag — if he couldn't stick at Alabama, what does that say about his ability to earn a role in an NFL offense?",
  strengths: ["The 15.0 YPR shows genuine deep-ball ability on vertical routes.", "The Oregon production proves he can contribute in a P5 spread offense."],
  weaknesses: ["The three-program arc (JUCO → Alabama → Oregon) raises questions about his ability to stick in one place.", "The 42 catches is modest volume that suggests a situational role.", "The 4 TDs on 42 catches is below average for a deep-ball specialist."],
  nflFit: "Deep-ball Z-receiver in a vertical offense. Best as a situational shot-play specialist.",
  comp: "Dez Fitzpatrick — a vertical threat with limited volume and program-hopping concerns.",
  dynastyOutlook: "WR6/7 with boom weeks. The deep-ball ability is real but the volume and program concerns cap his value.",
  badgersFit: "Benson is a deep-ball dart throw whose 15.0 YPR is intriguing but whose three-program arc is a red flag. At pick 6.195 he's a late-round stash.",
  verdict: "Deep-ball specialist with program-hopping concerns. Boom/bust WR6/7."
});

add('daniels-cj', {
  shortReport: "A Liberty transfer who stepped up to Miami in 2025 and produced 48-712-6TD with a 14.8 YPR. Daniels' G5-to-P5 transition is a positive signal — he produced at Liberty and then proved those skills translated to ACC competition at Miami. The 1 rush for -2 yards confirms he's a pure receiver with no rushing upside.\n\nThe 14.8 YPR is above average and suggests he can win on intermediate routes as well as vertical concepts. The 6 TDs on 48 catches (12.5% rate) is solid red-zone production. But the 48 catches is modest volume for a primary target at Miami, suggesting he was a complementary piece rather than a focal point. His ceiling is as a WR5 in a spread system.",
  strengths: ["The G5-to-P5 transition (Liberty to Miami) proves his skills translate to better competition.", "The 6 TDs on 48 catches is solid red-zone finishing."],
  weaknesses: ["The 48 catches is complementary volume that may not increase at the NFL level.", "The 14.8 YPR is good but not elite — he doesn't have the deep speed to be a true vertical threat."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a chain-mover and red-zone target.",
  comp: "Damiere Byrd — a reliable depth receiver with modest volume and efficiency.",
  dynastyOutlook: "WR6/7 with limited upside. The TD production is the only fantasy hook.",
  badgersFit: "Daniels is a depth receiver whose G5-to-P5 transition is encouraging but whose 48 catches are modest. At pick 6.197 he's a late-round stash.",
  verdict: "Reliable depth receiver with modest volume. WR6/7."
});

add('henderson-emm', {
  shortReport: "An Alabama transfer who produced 38-588-4TD at Kansas in 2025 with a 15.5 YPR and added 7 kick returns for 161 yards. Henderson is a speed/return profile whose fantasy value is concentrated in his special-teams ability. The 38 catches is modest volume that suggests a complementary role, and the 4 TDs are solid but not spectacular.\n\nThe 15.5 YPR is the positive signal — it shows he can win on intermediate and vertical routes with speed and ball-tracking. But the 38 catches is too small a sample to project with confidence, and the Alabama-to-Kansas transfer arc suggests he couldn't earn a role at an elite program. The 7 kick returns for 161 yards adds special-teams value that could earn him a roster spot.",
  strengths: ["The 15.5 YPR shows above-average efficiency and speed on vertical routes.", "The kick return ability gives him a roster floor on special teams."],
  weaknesses: ["The 38 catches is a small sample that doesn't project to significant NFL volume.", "The Alabama-to-Kansas transfer suggests he couldn't earn a role at an elite program."],
  nflFit: "Slot/returner in a spread offense. Best as a depth receiver who contributes on special teams.",
  comp: "Andre Roberts — a speed/return specialist with limited receiving upside.",
  dynastyOutlook: "WR7. The special-teams value keeps him on rosters but not in fantasy lineups.",
  badgersFit: "Henderson is a speed/return player with modest receiving upside. At pick 6.199 he's a return-yard league only option.",
  verdict: "Speed/return specialist with limited receiving value. WR7."
});

add('williams-cj', {
  shortReport: "A USC transfer who produced 42-545-3TD at Stanford in 2025 with a 13.0 YPR that shows possession-receiver ability. Williams is a reliable chain-mover who wins with route precision and reliable hands rather than speed or explosiveness. The 42 catches is modest volume for a primary target, suggesting he was a complementary piece in Stanford's offense.\n\nThe 13.0 YPR is below average for an outside receiver and confirms he operates primarily in the short and intermediate areas. The 3 TDs on 42 catches (7.1% rate) is below average and shows limited red-zone value. His ceiling is as a WR6 in a West Coast system that values possession receivers.",
  strengths: ["The reliable hands and route precision make him a trustworthy chain-mover.", "The USC-to-Stanford transition shows he can produce in a pro-style offense."],
  weaknesses: ["The 13.0 YPR is below average and shows no deep-ball ability.", "The 3 TDs on 42 catches is below-average red-zone production.", "The 42 catches is modest volume that may not translate to NFL targets."],
  nflFit: "Possession receiver in a West Coast system. Best as a chain-mover on short and intermediate routes.",
  comp: "Trent Taylor — a reliable possession slot with limited volume and upside.",
  dynastyOutlook: "WR7 with minimal upside. The possession profile doesn't produce fantasy value.",
  badgersFit: "Williams is a possession receiver with modest production. At pick 6.203 he's a hard pass in standard formats.",
  verdict: "Possession receiver with limited upside. WR7."
});

add('bond', {
  shortReport: "A steady Boston College producer whose 56-729-5TD in 2025 with a 13.0 YPR shows reliable hands and route-running precision. Bond is a classic possession receiver who wins in the intermediate game with timing and technique rather than athletic ability. The 56 catches is solid volume for a BC team that spreads the ball around, and the 5 TDs on 56 catches (8.9% rate) is modest but usable.\n\nThe 13.0 YPR is below average and confirms he doesn't win downfield — he's a short-to-intermediate target who catches the ball and gets tackled. That profile translates to a WR5/6 in a West Coast system but doesn't produce fantasy value because the YPR and TD rate are both modest. His ceiling is capped by the lack of explosiveness.",
  strengths: ["The 56 catches shows reliable volume production in a balanced offense.", "The route precision and reliable hands make him a trustworthy target on third downs."],
  weaknesses: ["The 13.0 YPR is below average and shows no deep-ball ability.", "The 5 TDs on 56 catches is modest scoring production.", "The lack of athletic explosiveness caps his ceiling at WR5/6."],
  nflFit: "Possession receiver in a West Coast system. Best as a chain-mover on short and intermediate routes.",
  comp: "Alex Erickson — a reliable possession receiver with limited upside.",
  dynastyOutlook: "WR6/7 with minimal upside. The reliable hands don't translate to fantasy production.",
  badgersFit: "Bond is a possession receiver with 56 catches but modest upside. At pick 6.204 he's a depth stash at best.",
  verdict: "Reliable possession receiver with limited upside. WR6/7."
});

add('smith-anthony', {
  shortReport: "A G5 producer at East Carolina who caught 60 balls for 882 yards and 7 TDs in 2025 with a 14.7 YPR and added 5 kick returns for 112 yards. Smith is the kind of productive small-school receiver who often gets overlooked in the draft but finds an NFL role through consistency and special-teams value. The 60 catches is solid volume, and the 7 TDs on 60 catches (11.7% rate) is above-average red-zone production.\n\nThe 14.7 YPR is above average for a G5 receiver and suggests he can win on intermediate and vertical routes. But the G5 competition level means his production is inflated relative to P5 receivers — 60 catches at ECU is equivalent to 40-45 catches in the ACC or SEC. The special-teams value (5 kick returns) gives him a roster floor that most late-round receivers lack.",
  strengths: ["The 60 catches and 7 TDs show solid volume and scoring production.", "The 14.7 YPR is above average for a G5 receiver.", "The kick return ability gives him a roster floor on special teams."],
  weaknesses: ["The G5 competition level inflates his production relative to P5 receivers.", "The 60 catches may not translate to NFL volume against better corners."],
  nflFit: "Slot/returner in a spread offense. Best as a depth receiver who contributes on special teams.",
  comp: "Keelan Cole — a productive small-school receiver who found an NFL role through consistency.",
  dynastyOutlook: "WR6/7 with modest upside. The special-teams value keeps him on rosters.",
  badgersFit: "Smith is a G5 producer with 60 catches and return value. At pick 6.218 he's a late-round stash.",
  verdict: "Productive G5 receiver with return value. WR6/7."
});

add('kaliakmanis', {
  shortReport: "A Minnesota transfer who produced 3,124 yards, 20 TDs, 7 INTs in 2025 at Rutgers — his best season of a four-year career that spans 8,604 yards and 55 TDs across 48 games. Kaliakmanis is a pocket passer whose 56-98-2TD rushing line gives him almost no fantasy floor. His value is entirely in the 20 passing TDs and 3,124 yards, which are modest numbers for a starting quarterback.\n\nThe career totals (8,604 yards, 55 TDs in 48 games) translate to roughly 180 yards and 1.1 TDs per game — replacement-level production that doesn't project to fantasy relevance. The 7 INTs on 400+ attempts is a solid rate, but the modest volume and zero rushing make him unrosterable in single-QB and a low-end streamer in superflex.",
  strengths: ["The 20 passing TDs in 2025 is his best season and shows some upward trajectory.", "The 7 INTs on 400+ attempts is solid ball security."],
  weaknesses: ["The career averages (180 yards, 1.1 TDs per game) are replacement-level production.", "The 98 rushing yards in 2025 gives him zero fantasy floor.", "The modest passing volume doesn't project to NFL starter ability."],
  nflFit: "Backup QB in a timing-based system. Best as a game manager who doesn't turn the ball over.",
  comp: "Gardner Minshew — a career backup with modest arm talent and limited upside.",
  dynastyOutlook: "QB7. Not rosterable in any format.",
  badgersFit: "Kaliakmanis is a career backup with modest stats across 48 games. At pick 6.223 he's undraftable for fantasy.",
  verdict: "Career backup with limited upside. Not fantasy-relevant."
});

add('heidenreich', {
  shortReport: "A Navy running back whose 142-687-8TD in 2025 with a 4.8 YPC and 8 catches for 52 yards shows solid service-academy production. Heidenreich's fantasy value is capped by the Navy offense — the triple-option system creates rushing volume that doesn't translate to NFL offenses, and the 8 catches for 52 yards gives him almost no PPR floor.\n\nThe 4.8 YPC is modest for a triple-option back who benefits from option misdirection, and the 8 TDs on 142 carries (5.6% rate) is solid but not elite. The service-academy pedigree means he's been coached in a disciplined system, but the triple-option experience doesn't prepare him for NFL blocking schemes or route concepts.",
  strengths: ["The 8 rushing TDs shows goal-line finishing ability.", "The disciplined service-academy background suggests strong work ethic and coachability."],
  weaknesses: ["The triple-option system inflates his rushing production relative to NFL readiness.", "The 4.8 YPC is modest for a back who benefits from option misdirection.", "The 8 catches for 52 yards gives him almost no PPR value."],
  nflFit: "Fullback or special-teams player. The triple-option background doesn't translate to NFL offensive schemes.",
  comp: "Malcolm Perry — a Navy back who transitioned to receiver/special teams in the NFL.",
  dynastyOutlook: "Not rosterable. The service-academy background and triple-option system don't project to fantasy value.",
  badgersFit: "Heidenreich is a service-academy back with limited NFL upside. At pick 6.230 he's undraftable for fantasy.",
  verdict: "Service-academy back with limited NFL translation. Not fantasy-relevant."
});

add('mcgowan', {
  shortReport: "A former Oklahoma signee who took the JUCO route to Kentucky and produced 189-1025-11TD in 2025 with a 5.4 YPC and 14 catches for 98 yards and 1 TD. McGowan is a volume grinder whose 1,025 yards and 11 TDs on 189 carries (5.4 YPC) show solid efficiency and goal-line finishing. The 14 catches gives him a tiny PPR floor, but he's primarily a between-the-tackles runner.\n\nThe JUCO-to-P5 transition is a positive signal — he proved he could produce at the SEC level after developing in junior college. The 11 TDs on 189 carries (5.8% rate) is solid goal-line production, and the 1,025 yards shows he can handle a feature workload. But the one-year sample is a concern — did he get a starting role because of talent or because of roster turnover ahead of him?",
  strengths: ["The 1,025 yards and 11 TDs on 189 carries shows solid efficiency and goal-line finishing.", "The JUCO-to-SEC transition proves his skills translate to P5 competition."],
  weaknesses: ["The one-year sample (189 carries) is too small to project with confidence.", "The 14 catches for 98 yards gives him minimal PPR floor.", "The Kentucky offense is balanced, which may have inflated his rushing volume."],
  nflFit: "Early-down committee back with goal-line value. Best in a power-run scheme.",
  comp: "Chris Evans — a JUCO-to-P5 back with modest volume and TD-dependent value.",
  dynastyOutlook: "RB4/5 with TD-dependent value. The one-year sample introduces risk.",
  badgersFit: "McGowan is a one-year producer with 11 TDs but a small sample. At pick 6.237 he's a bench stash with TD upside.",
  verdict: "Volume grinder with goal-line value. TD-dependent RB4/5."
});

add('miller-jam', {
  shortReport: "An Alabama committee back who took over the lead role in 2025 and produced 164-882-9TD with a 5.4 YPC and 11 catches for 72 yards. Miller's 9 TDs on 164 carries (5.5% rate) is solid goal-line production, and the 882 yards shows he can handle a moderate workload in the SEC. The 11 catches gives him a minimal PPR floor.\n\nThe Alabama context matters — the Crimson Tide typically split carries among multiple talented backs, which means Miller's 164 carries came in a committee even as the 'lead' back. That snap-share pattern will likely continue in the NFL, capping his volume at 150-180 carries per season. The 5.4 YPC is solid but not elite, and the lack of explosive plays limits his weekly ceiling.",
  strengths: ["The 9 rushing TDs on 164 carries shows solid goal-line finishing.", "The 5.4 YPC is solid SEC production.", "The Alabama pedigree suggests he's been coached at an elite level."],
  weaknesses: ["The 164 carries in a committee suggests his NFL volume will be capped.", "The 11 catches for 72 yards gives him minimal PPR floor.", "The 882 yards on 164 carries is modest efficiency that doesn't suggest big-play ability."],
  nflFit: "Committee back with goal-line value. Best in a rotation that maximizes his short-yardage ability.",
  comp: "Jalen Milroe's backfield mate — a committee back with TD-dependent value.",
  dynastyOutlook: "RB4/5 with TD-dependent value. The committee role caps his ceiling.",
  badgersFit: "Miller is an Alabama committee back with 9 TDs but capped volume. At pick 6.245 he's a bench stash.",
  verdict: "Committee back with goal-line value. TD-dependent RB4/5."
});

add('burks', {
  shortReport: "A Purdue transfer who caught 38 balls for 512 yards and 4 TDs at Oklahoma in 2025 with a 13.5 YPR. Burks is a slot-only receiver whose modest production (38 catches) and below-average YPR (13.5) don't project to fantasy relevance. The 4 TDs on 38 catches (10.5% rate) is solid red-zone finishing, but the overall profile is that of a depth receiver who struggles to create separation against P5 corners.\n\nThe Purdue-to-Oklahoma transfer arc is concerning — he moved from a pass-heavy Big Ten offense to an even more pass-heavy Big 12 offense and still only managed 38 catches. That suggests his skill set is limited to a specific role that doesn't generate significant volume. His ceiling is as a WR6 in a spread system.",
  strengths: ["The 4 TDs on 38 catches shows solid red-zone finishing.", "The Oklahoma spread offense prepared him for NFL route concepts."],
  weaknesses: ["The 38 catches is modest volume that suggests a limited role.", "The 13.5 YPR is below average and shows no deep-ball ability.", "The Purdue-to-Oklahoma transfer without increased production is a red flag."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a complementary piece.",
  comp: "Dontay Demus — a slot receiver with limited volume and upside.",
  dynastyOutlook: "WR7 with minimal upside. The modest production doesn't project to fantasy value.",
  badgersFit: "Burks is a slot receiver with 38 catches and limited upside. At pick 6.254 he's undraftable for fantasy.",
  verdict: "Slot receiver with limited upside. Not fantasy-relevant."
});

fs.writeFileSync('public/scouting-reports.json', JSON.stringify(d, null, 2));
console.log('Added ' + (Object.keys(d).length - 36) + ' missing reports. Total: ' + Object.keys(d).length);
"
