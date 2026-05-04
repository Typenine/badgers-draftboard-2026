const fs = require('fs');
const d = JSON.parse(fs.readFileSync('public/scouting-reports.json','utf8'));

function add(id, obj) {
  if (!d[id]) d[id] = obj;
}

// ========== MISSING TIER 6 PLAYERS (1-2 paragraph shortReports) ==========

add('washington-mike', {
  shortReport: "A one-year wonder whose 146-822-9TD rushing line at Arkansas in 2025 is productive but comes with significant context concerns. Washington was a backup until the 2025 season, when he finally earned a starting role and produced solid SEC numbers. The 5.6 YPC is good-not-great for a feature back, and the 12 catches for 89 yards show minimal receiving value. He is a two-down grinder whose fantasy ceiling is capped by the lack of a passing-game role.\n\nThe one-year sample is the primary concern. One productive season as a starter is better than none, but NFL teams prefer backs with multi-year track records of production and durability. The 822 yards on 146 carries suggests he handled a moderate workload well, but the 9 TDs are the fantasy hook — a back who scores near the goal line has standalone value even in a committee. The risk is that his role was opportunity-driven rather than skill-driven, and a new coaching staff or backfield competition could relegate him to a backup role.",
  strengths: ["The 9 rushing TDs on 146 carries (6.2% TD rate) shows he can finish near the goal line.", "The 5.6 YPC is solid SEC production that suggests he can handle a moderate workload."],
  weaknesses: ["The one-year sample (146 carries) is too small to project with confidence.", "The 12 catches for 89 yards gives him almost no PPR floor."],
  nflFit: "Early-down committee back with goal-line value. Best in a power-run scheme that feeds him between the tackles.",
  comp: "Zamir White — a two-down grinder with modest receiving ability whose fantasy value is TD-dependent.",
  dynastyOutlook: "RB4/5 with TD-dependent value. The one-year sample introduces significant risk.",
  badgersFit: "Washington is a one-year producer whose 9 TDs are enticing but whose 12 catches and one-year sample are red flags. At pick 6.122 he is a bench stash with TD upside.",
  verdict: "One-year SEC grinder with goal-line value. TD-dependent RB4/5."
});

add('virgil', {
  shortReport: "A small-school deep threat whose 48-833-7TD line in 2025 translates to a 17.4 YPR that screams big-play ability. Virgil's production came at Texas Tech in the Air Raid system, which inflates receiver numbers significantly — the Red Raiders throw the ball 50+ times per game, creating volume that will not exist in most NFL offenses. The 17.4 YPR is legitimate deep-ball skill, but the Air Raid inflation means his 48 catches are more like 30 catches in a balanced offense.\n\nThe deep-ball tracking is his translatable skill. Virgil wins downfield by adjusting to the ball in flight, using late hands to avoid tipping off defenders, and finishing through contact. Those skills work in any system that takes vertical shots. The question is whether he can run a full route tree or whether he is a one-dimensional deep specialist whose snap count is capped at 30-40% of offensive snaps.",
  strengths: ["The 17.4 YPR reflects genuine deep-ball ability and ball-tracking skill.", "The 7 TDs on 48 catches shows he can finish in the red zone."],
  weaknesses: ["The Air Raid system inflates his production — 48 catches in the Air Raid is equivalent to 30 in a balanced offense.", "The small-school competition raises questions about whether his separation skills translate to NFL-caliber corners."],
  nflFit: "Deep-ball Z-receiver in a vertical offense. Best as a situational shot-play specialist.",
  comp: "Darius Slayton — deep-ball speed with inconsistent volume.",
  dynastyOutlook: "WR6/7 with boom weeks. The deep-ball ability is real but the volume is inconsistent.",
  badgersFit: "Virgil is a deep-ball dart throw whose 17.4 YPR is legit but whose Air Raid-inflated production is misleading. At pick 6.143 he is a late-round stash for return-yard leagues or best-ball formats.",
  verdict: "Air Raid deep threat with big-play upside. Boom/bust WR6/7."
});

add('law', {
  shortReport: "A Kentucky slot receiver whose 49-632-5TD in 2025 with a 12.9 YPR is modest but efficient production. Law operates primarily in the intermediate areas of the field, running option routes, crossers, and dig routes that create separation with quickness and route precision rather than speed. The 3 rush attempts for 18 yards and 6 kick returns for 142 yards add special-teams value that could earn him a roster spot even if his receiving production does not translate.\n\nThe Kentucky offense is run-heavy, which suppressed Law's volume — he was the second or third option in a ground-first attack. In a pass-heavy NFL offense, his target share would likely increase, but his physical profile (modest size and speed) suggests he will struggle to separate against NFL-caliber defenders. The special-teams contribution is his floor — return ability keeps him on rosters.",
  strengths: ["The route-running precision creates separation in the intermediate game.", "The special-teams value (KR) gives him a roster floor most late-round receivers lack."],
  weaknesses: ["The modest YPR (12.9) shows he does not win downfield — he is a possession slot with limited explosive ability.", "The 49 catches in a run-heavy offense is modest volume that may not translate to NFL targets."],
  nflFit: "Slot/returner in a West Coast system. Best as a depth receiver who contributes on special teams.",
  comp: "Ray-Ray McCloud — slot/return specialist with limited receiving upside.",
  dynastyOutlook: "WR7. The special-teams value keeps him on rosters but not in fantasy lineups.",
  badgersFit: "Law is a special-teams player with modest receiving upside. At pick 6.168 he is a hard pass in standard formats but viable in return-yard leagues.",
  verdict: "Slot/returner with limited fantasy upside. Special-teams depth."
});

add('randall', {
  shortReport: "A Clemson bruiser whose 152-819-8TD in 2025 (5.4 YPC) shows solid power-running ability in the ACC. Randall is a between-the-tackles grinder whose fantasy value is concentrated in goal-line situations and short-yardage conversions. The 9 catches for 61 yards gives him almost no PPR floor, and the one-year sample raises questions about whether his production was driven by opportunity or skill.\n\nThe one-year concern is real — he did not produce significant numbers before 2025, which suggests he may have been a backup who got a shot due to injuries or roster turnover ahead of him. The 8 TDs on 152 carries is a solid rate that shows he can finish near the goal line, but the 819 yards on 152 carries is modest efficiency that will not excite NFL scouts.",
  strengths: ["The 8 rushing TDs on 152 carries shows goal-line finishing ability.", "The 5.4 YPC is solid ACC production that suggests he can handle a moderate workload."],
  weaknesses: ["The one-year sample is too small to project with confidence — he may have been an opportunity-driven producer.", "The 9 catches for 61 yards gives him almost no PPR value."],
  nflFit: "Short-yardage and goal-line back in a committee. Best as a situational power runner.",
  comp: "Trey Benson — a power back with limited receiving ability.",
  dynastyOutlook: "RB5 with TD-dependent value. The one-year sample introduces risk.",
  badgersFit: "Randall is a power back with 8 TDs but a one-year sample. At pick 6.174 he is a late-round TD dart throw.",
  verdict: "Power back with goal-line value. TD-dependent RB5."
});

add('allen-cyrus', {
  shortReport: "A Georgia Tech transfer who found a role at Cincinnati in 2025, producing 45-678-5TD with a 15.1 YPR that reflects deep-ball ability. Allen's career arc — Georgia Tech to Cincinnati — shows he could not earn consistent targets in Atlanta's option-heavy attack but found more opportunities in a balanced spread offense. The 1 rush for 7 yards confirms he is a pure receiver with no rushing floor.\n\nThe 15.1 YPR is the positive signal — it shows he wins downfield on vertical routes, which is a translatable skill at the NFL level. But the 45 catches on a Cincinnati team that threw the ball frequently is modest volume, suggesting he was a complementary piece rather than a focal point. The 5 TDs are solid but not spectacular for a receiver with his YPR.",
  strengths: ["The 15.1 YPR shows genuine deep-ball ability on vertical routes.", "The Cincinnati transfer shows he can produce in a spread passing offense."],
  weaknesses: ["The 45 catches is modest volume that suggests a complementary role rather than a primary target.", "The Georgia Tech failure raises questions about whether his skill set is limited to specific offensive schemes."],
  nflFit: "Deep-ball Z-receiver in a vertical offense. Best as a situational shot-play specialist.",
  comp: "Kadarius Toney — a vertical threat with limited but explosive production.",
  dynastyOutlook: "WR6/7 with boom weeks. The deep-ball ability is real but the volume is inconsistent.",
  badgersFit: "Allen is a deep-ball stash whose 15.1 YPR is intriguing but whose 45 catches are modest. At pick 6.176 he is a late-round dart.",
  verdict: "Deep-ball specialist with modest volume. Boom/bust WR6/7."
});

add('coleman-kevin', {
  shortReport: "A Missouri slot receiver whose 52-712-6TD in 2025 with a 13.7 YPR shows solid efficiency and TD production. Coleman's 2 rushes for 11 yards and 5 punt returns for 38 yards add minimal special-teams value. He is a reliable chain-mover who wins in the intermediate game with route precision and reliable hands.\n\nThe Missouri offense spreads the ball around, which capped Coleman's individual volume — 52 catches on a team with multiple NFL-caliber receivers is a solid complementary role. The 6 TDs on 52 catches (11.5% rate) is above average and suggests he has a nose for the end zone, but the modest YPR (13.7) confirms he is not a deep-ball threat. His NFL ceiling is as a WR4/5 in a spread system.",
  strengths: ["The 6 TDs on 52 catches shows above-average red-zone finishing.", "The reliable hands and route precision make him a trustworthy chain-mover."],
  weaknesses: ["The 13.7 YPR is modest and shows no deep-ball ability.", "The 52 catches is complementary volume that may not increase at the NFL level."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a reliable chain-mover on third downs.",
  comp: "Kendrick Bourne — a reliable slot with modest volume and occasional TD upside.",
  dynastyOutlook: "WR6/7 with limited upside. The TD production is the only fantasy hook.",
  badgersFit: "Coleman is a chain-mover with 6 TDs but modest upside. At pick 6.177 he is a depth stash.",
  verdict: "Reliable slot with modest volume and TD upside. WR6/7."
});

add('payton', {
  shortReport: "An FCS dual-threat quarterback whose 2,719 yards, 16 TDs, 4 INTs, and 72.0% completion in 2025 at NDSU is efficient but volume-limited, while his 136-777-13TD rushing line is the fantasy differentiator. Payton's 13 rushing TDs are more than most NFL quarterbacks score in a season — that is legitimate fantasy gold in superflex formats.\n\nThe NDSU context is the key evaluation factor. The Bison run a pro-style offense with play-action concepts that prepare quarterbacks for NFL route trees, but the FCS competition is significantly weaker than FBS. Payton's 72.0% completion is inflated by the competition level, and his 2,719 passing yards are modest for a 16-game season. The 4 INTs on 300+ attempts shows excellent ball security, but the volume concern is real — can he produce 3,000+ yards against NFL defenses?\n\nThe 777 rushing yards and 13 TDs are the fantasy hook that makes him rosterable regardless of the passing questions. In superflex, a quarterback who scores 10+ rushing TDs per season has a weekly floor that pocket passers cannot match. The question is whether the rushing production translates — NFL linebackers are faster and more disciplined than FCS defenders, and designed QB runs are less common at the next level.",
  strengths: ["The 13 rushing TDs are elite fantasy production that gives him a weekly floor in superflex.", "The 72.0% completion shows excellent ball security and efficiency.", "The NDSU pro-style offense prepares him for NFL concepts better than most FCS quarterbacks."],
  weaknesses: ["The 2,719 passing yards is modest volume for a 16-game season.", "The FCS competition level means his completion percentage and passing production will decline significantly at the NFL level.", "The 777 rushing yards may not translate against NFL-caliber pursuit speed."],
  nflFit: "Dual-threat QB in a run-heavy offense. Best in a system that uses designed QB runs and RPOs to maximize his rushing TD production.",
  comp: "Taysom Hill — a run-first quarterback whose fantasy value is concentrated in rushing TDs.",
  dynastyOutlook: "QB5/6 in superflex. The 13 rushing TDs give him streaming value. Not rosterable in single-QB.",
  badgersFit: "Payton is a run-first FCS QB whose 13 rushing TDs are the fantasy hook. At pick 6.178 he is a superflex-only stash with boom weeks.",
  verdict: "FCS dual-threat with elite rushing TD production. Superflex streaming option."
});

add('green', {
  shortReport: "A Boise State transfer who produced 2,714 yards, 19 TDs, 11 INTs, and 60.7% completion in 2025 at Arkansas, with 139-777-8TD rushing. Green is a dual-threat quarterback whose fantasy value is rooted in the 8 rushing TDs and 777 rushing yards — in superflex, that rushing floor gives him a weekly baseline that pocket passers cannot match.\n\nThe 19 passing TDs and 60.7% completion are modest numbers that reflect inconsistency as a passer. The 11 INTs on 400+ attempts is a manageable rate but not elite ball security. The 6 games of 300+ passing yards in 2025 show he can produce in volume when the game script favors passing, but the overall profile suggests he is a better runner than passer. In the NFL, that profile limits him to backup or gadget packages unless the passing develops significantly.",
  strengths: ["The 777 rushing yards and 8 TDs give him a fantasy floor that pocket passers cannot match.", "The 6 games of 300+ passing yards show he can produce in volume when the game script favors passing."],
  weaknesses: ["The 60.7% completion is below the NFL threshold for consistent starter play.", "The 11 INTs suggest decision-making that needs refinement against better competition.", "The 19 passing TDs is modest production for a starting quarterback in the SEC."],
  nflFit: "Dual-threat backup QB. Best in a run-heavy system that uses designed QB runs and RPOs.",
  comp: "Tyler Huntley — a run-first quarterback with modest passing ability.",
  dynastyOutlook: "QB6 in superflex. The rushing floor gives him streaming value. Not rosterable in single-QB.",
  badgersFit: "Green is a dual-threat QB whose 8 rushing TDs give him superflex value. At pick 6.182 he is a bye-week streamer at best.",
  verdict: "Dual-threat with rushing floor. Superflex streaming option only."
});

add('brown-barion', {
  shortReport: "A Kentucky transfer who found a return specialist role at LSU in 2025, catching 53 balls for 532 yards and 1 TD (10.0 YPR) while adding 6 career kick return TDs including a 99-yarder. Brown's fantasy value is 100% concentrated in his return ability — the 53-532-1 receiving line is replacement-level production that does not project to any NFL receiving role.\n\nThe 6 kick return TDs is an SEC record and reflects elite return ability: vision to identify the seam, burst to accelerate through the first wave, and top-end speed to outrun coverage. That skill is translatable to the NFL, where return specialists are always in demand. But return touchdowns regress heavily at the NFL level — 6 in college becomes 0-1 in the pros — which means his fantasy value is almost entirely in return-yard leagues.",
  strengths: ["The 6 career kick return TDs (SEC record) is elite special-teams production.", "The 99-yard return shows top-end speed that translates to any level."],
  weaknesses: ["The 10.0 YPR shows zero deep-ball ability — he is a possession receiver with no explosiveness.", "The 1 TD on 53 catches is negligible scoring production.", "Return TDs regress heavily at the NFL level — 6 becomes 0-1."],
  nflFit: "Return specialist with minimal receiving value. Best as a special-teams contributor.",
  comp: "Mecole Hardman — a return specialist whose early NFL value was on special teams.",
  dynastyOutlook: "WR7 in standard. WR5/6 in return-yard leagues. His value is 100% format-dependent.",
  badgersFit: "Brown is a return specialist only. The 6 KR TDs are impressive but the 53-532-1 receiving is nothing. At pick 6.190 he is only draftable in return-yard leagues.",
  verdict: "Elite return specialist. Return-yard league only."
});

add('cameron', {
  shortReport: "A UCF transfer who produced 55-808-7TD at Baylor in 2025 with a 14.7 YPR that shows solid efficiency and TD production. Cameron is a slot receiver who wins in the intermediate game with quickness and reliable hands. The 2 rushes for 9 yards confirm he is a pure receiver with no rushing upside.\n\nThe 14.7 YPR is above average for a slot receiver and suggests he can stretch the field on intermediate routes — digs, crossers, and seam routes that exploit the soft spot in zone coverage. The 7 TDs on 55 catches (12.7% rate) is solid red-zone production that shows he can finish when targeted near the goal line. But the 55 catches is modest volume for a primary target, suggesting he was a complementary piece in Baylor's offense.",
  strengths: ["The 14.7 YPR shows above-average efficiency for a slot receiver.", "The 7 TDs on 55 catches is solid red-zone finishing."],
  weaknesses: ["The 55 catches is complementary volume that may not increase at the NFL level.", "The UCF-to-Baylor transfer arc suggests he needed a specific system to produce."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a chain-mover on third downs.",
  comp: "Braxton Berrios — a reliable slot with modest volume and occasional TD upside.",
  dynastyOutlook: "WR6/7 with limited upside. The TD production is the only fantasy hook.",
  badgersFit: "Cameron is a slot receiver with 7 TDs but modest upside. At pick 6.191 he is a depth stash.",
  verdict: "Reliable slot with modest volume and TD upside. WR6/7."
});

add('benson', {
  shortReport: "A JUCO-to-Alabama-to-Oregon transfer whose 42-628-4TD in 2025 with a 15.0 YPR shows deep-ball ability. Benson's career arc — three programs in three years — raises questions about his ability to stick in one place, but the 15.0 YPR at Oregon suggests he found a role as a vertical threat. The 1 rush for 6 yards confirms he is a pure receiver.\n\nThe deep-ball ability is his translatable skill. Benson tracks the ball downfield with natural hands and adjusts to underthrown passes, which are skills that work in any vertical offense. But the 42 catches is modest volume that suggests a situational role, and the 4 TDs on 42 catches (9.5% rate) is below average for a deep-ball specialist. The three-program arc is a red flag — if he could not stick at Alabama, what does that say about his ability to earn a role in an NFL offense?",
  strengths: ["The 15.0 YPR shows genuine deep-ball ability on vertical routes.", "The Oregon production proves he can contribute in a P5 spread offense."],
  weaknesses: ["The three-program arc (JUCO -> Alabama -> Oregon) raises questions about his ability to stick in one place.", "The 42 catches is modest volume that suggests a situational role.", "The 4 TDs on 42 catches is below average for a deep-ball specialist."],
  nflFit: "Deep-ball Z-receiver in a vertical offense. Best as a situational shot-play specialist.",
  comp: "Dez Fitzpatrick — a vertical threat with limited volume and program-hopping concerns.",
  dynastyOutlook: "WR6/7 with boom weeks. The deep-ball ability is real but the volume and program concerns cap his value.",
  badgersFit: "Benson is a deep-ball dart throw whose 15.0 YPR is intriguing but whose three-program arc is a red flag. At pick 6.195 he is a late-round stash.",
  verdict: "Deep-ball specialist with program-hopping concerns. Boom/bust WR6/7."
});

add('daniels-cj', {
  shortReport: "A Liberty transfer who stepped up to Miami in 2025 and produced 48-712-6TD with a 14.8 YPR. Daniels' G5-to-P5 transition is a positive signal — he produced at Liberty and then proved those skills translated to ACC competition at Miami. The 1 rush for -2 yards confirms he is a pure receiver with no rushing upside.\n\nThe 14.8 YPR is above average and suggests he can win on intermediate routes as well as vertical concepts. The 6 TDs on 48 catches (12.5% rate) is solid red-zone production. But the 48 catches is modest volume for a primary target at Miami, suggesting he was a complementary piece rather than a focal point. His ceiling is as a WR5 in a spread system.",
  strengths: ["The G5-to-P5 transition (Liberty to Miami) proves his skills translate to better competition.", "The 6 TDs on 48 catches is solid red-zone finishing."],
  weaknesses: ["The 48 catches is complementary volume that may not increase at the NFL level.", "The 14.8 YPR is good but not elite — he does not have the deep speed to be a true vertical threat."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a chain-mover and red-zone target.",
  comp: "Damiere Byrd — a reliable depth receiver with modest volume and efficiency.",
  dynastyOutlook: "WR6/7 with limited upside. The TD production is the only fantasy hook.",
  badgersFit: "Daniels is a depth receiver whose G5-to-P5 transition is encouraging but whose 48 catches are modest. At pick 6.197 he is a late-round stash.",
  verdict: "Reliable depth receiver with modest volume. WR6/7."
});

add('henderson-emm', {
  shortReport: "An Alabama transfer who produced 38-588-4TD at Kansas in 2025 with a 15.5 YPR and added 7 kick returns for 161 yards. Henderson is a speed/return profile whose fantasy value is concentrated in his special-teams ability. The 38 catches is modest volume that suggests a complementary role, and the 4 TDs are solid but not spectacular.\n\nThe 15.5 YPR is the positive signal — it shows he can win on intermediate and vertical routes with speed and ball-tracking. But the 38 catches is too small a sample to project with confidence, and the Alabama-to-Kansas transfer arc suggests he could not earn a role at an elite program. The 7 kick returns for 161 yards adds special-teams value that could earn him a roster spot.",
  strengths: ["The 15.5 YPR shows above-average efficiency and speed on vertical routes.", "The kick return ability gives him a roster floor on special teams."],
  weaknesses: ["The 38 catches is a small sample that does not project to significant NFL volume.", "The Alabama-to-Kansas transfer suggests he could not earn a role at an elite program."],
  nflFit: "Slot/returner in a spread offense. Best as a depth receiver who contributes on special teams.",
  comp: "Andre Roberts — a speed/return specialist with limited receiving upside.",
  dynastyOutlook: "WR7. The special-teams value keeps him on rosters but not in fantasy lineups.",
  badgersFit: "Henderson is a speed/return player with modest receiving upside. At pick 6.199 he is a return-yard league only option.",
  verdict: "Speed/return specialist with limited receiving value. WR7."
});

add('williams-cj', {
  shortReport: "A USC transfer who produced 42-545-3TD at Stanford in 2025 with a 13.0 YPR that shows possession-receiver ability. Williams is a reliable chain-mover who wins with route precision and reliable hands rather than speed or explosiveness. The 42 catches is modest volume for a primary target, suggesting he was a complementary piece in Stanford's offense.\n\nThe 13.0 YPR is below average for an outside receiver and confirms he operates primarily in the short and intermediate areas. The 3 TDs on 42 catches (7.1% rate) is below average and shows limited red-zone value. His ceiling is as a WR6 in a West Coast system that values possession receivers.",
  strengths: ["The reliable hands and route precision make him a trustworthy chain-mover.", "The USC-to-Stanford transition shows he can produce in a pro-style offense."],
  weaknesses: ["The 13.0 YPR is below average and shows no deep-ball ability.", "The 3 TDs on 42 catches is below-average red-zone production.", "The 42 catches is modest volume that may not translate to NFL targets."],
  nflFit: "Possession receiver in a West Coast system. Best as a chain-mover on short and intermediate routes.",
  comp: "Trent Taylor — a reliable possession slot with limited volume and upside.",
  dynastyOutlook: "WR7 with minimal upside. The possession profile does not produce fantasy value.",
  badgersFit: "Williams is a possession receiver with modest production. At pick 6.203 he is a hard pass in standard formats.",
  verdict: "Possession receiver with limited upside. WR7."
});

add('bond', {
  shortReport: "A steady Boston College producer whose 56-729-5TD in 2025 with a 13.0 YPR shows reliable hands and route-running precision. Bond is a classic possession receiver who wins in the intermediate game with timing and technique rather than athletic ability. The 56 catches is solid volume for a BC team that spreads the ball around, and the 5 TDs on 56 catches (8.9% rate) is modest but usable.\n\nThe 13.0 YPR is below average and confirms he does not win downfield — he is a short-to-intermediate target who catches the ball and gets tackled. That profile translates to a WR5/6 in a West Coast system but does not produce fantasy value because the YPR and TD rate are both modest. His ceiling is capped by the lack of explosiveness.",
  strengths: ["The 56 catches shows reliable volume production in a balanced offense.", "The route precision and reliable hands make him a trustworthy target on third downs."],
  weaknesses: ["The 13.0 YPR is below average and shows no deep-ball ability.", "The 5 TDs on 56 catches is modest scoring production.", "The lack of athletic explosiveness caps his ceiling at WR5/6."],
  nflFit: "Possession receiver in a West Coast system. Best as a chain-mover on short and intermediate routes.",
  comp: "Alex Erickson — a reliable possession receiver with limited upside.",
  dynastyOutlook: "WR6/7 with minimal upside. The reliable hands do not translate to fantasy production.",
  badgersFit: "Bond is a possession receiver with 56 catches but modest upside. At pick 6.204 he is a depth stash at best.",
  verdict: "Reliable possession receiver with limited upside. WR6/7."
});

add('smith-anthony', {
  shortReport: "A G5 producer at East Carolina who caught 60 balls for 882 yards and 7 TDs in 2025 with a 14.7 YPR and added 5 kick returns for 112 yards. Smith is the kind of productive small-school receiver who often gets overlooked in the draft but finds an NFL role through consistency and special-teams value. The 60 catches is solid volume, and the 7 TDs on 60 catches (11.7% rate) is above-average red-zone production.\n\nThe 14.7 YPR is above average for a G5 receiver and suggests he can win on intermediate and vertical routes. But the G5 competition level means his production is inflated relative to P5 receivers — 60 catches at ECU is equivalent to 40-45 catches in the ACC or SEC. The special-teams value (5 kick returns) gives him a roster floor that most late-round receivers lack.",
  strengths: ["The 60 catches and 7 TDs show solid volume and scoring production.", "The 14.7 YPR is above average for a G5 receiver.", "The kick return ability gives him a roster floor on special teams."],
  weaknesses: ["The G5 competition level inflates his production relative to P5 receivers.", "The 60 catches may not translate to NFL volume against better corners."],
  nflFit: "Slot/returner in a spread offense. Best as a depth receiver who contributes on special teams.",
  comp: "Keelan Cole — a productive small-school receiver who found an NFL role through consistency.",
  dynastyOutlook: "WR6/7 with modest upside. The special-teams value keeps him on rosters.",
  badgersFit: "Smith is a G5 producer with 60 catches and return value. At pick 6.218 he is a late-round stash.",
  verdict: "Productive G5 receiver with return value. WR6/7."
});

add('kaliakmanis', {
  shortReport: "A Minnesota transfer who produced 3,124 yards, 20 TDs, 7 INTs in 2025 at Rutgers — his best season of a four-year career that spans 8,604 yards and 55 TDs across 48 games. Kaliakmanis is a pocket passer whose 56-98-2TD rushing line gives him almost no fantasy floor. His value is entirely in the 20 passing TDs and 3,124 yards, which are modest numbers for a starting quarterback.\n\nThe career totals (8,604 yards, 55 TDs in 48 games) translate to roughly 180 yards and 1.1 TDs per game — replacement-level production that does not project to fantasy relevance. The 7 INTs on 400+ attempts is a solid rate, but the modest volume and zero rushing make him unrosterable in single-QB and a low-end streamer in superflex.",
  strengths: ["The 20 passing TDs in 2025 is his best season and shows some upward trajectory.", "The 7 INTs on 400+ attempts is solid ball security."],
  weaknesses: ["The career averages (180 yards, 1.1 TDs per game) are replacement-level production.", "The 98 rushing yards in 2025 gives him zero fantasy floor.", "The modest passing volume does not project to NFL starter ability."],
  nflFit: "Backup QB in a timing-based system. Best as a game manager who does not turn the ball over.",
  comp: "Gardner Minshew — a career backup with modest arm talent and limited upside.",
  dynastyOutlook: "QB7. Not rosterable in any format.",
  badgersFit: "Kaliakmanis is a career backup with modest stats across 48 games. At pick 6.223 he is undraftable for fantasy.",
  verdict: "Career backup with limited upside. Not fantasy-relevant."
});

add('heidenreich', {
  shortReport: "A Navy running back whose 142-687-8TD in 2025 with a 4.8 YPC and 8 catches for 52 yards shows solid service-academy production. Heidenreich's fantasy value is capped by the Navy offense — the triple-option system creates rushing volume that does not translate to NFL offenses, and the 8 catches for 52 yards gives him almost no PPR floor.\n\nThe 4.8 YPC is modest for a triple-option back who benefits from option misdirection, and the 8 TDs on 142 carries (5.6% rate) is solid but not elite. The service-academy pedigree means he has been coached in a disciplined system, but the triple-option experience does not prepare him for NFL blocking schemes or route concepts.",
  strengths: ["The 8 rushing TDs shows goal-line finishing ability.", "The disciplined service-academy background suggests strong work ethic and coachability."],
  weaknesses: ["The triple-option system inflates his rushing production relative to NFL readiness.", "The 4.8 YPC is modest for a back who benefits from option misdirection.", "The 8 catches for 52 yards gives him almost no PPR value."],
  nflFit: "Fullback or special-teams player. The triple-option background does not translate to NFL offensive schemes.",
  comp: "Malcolm Perry — a Navy back who transitioned to receiver/special teams in the NFL.",
  dynastyOutlook: "Not rosterable. The service-academy background and triple-option system do not project to fantasy value.",
  badgersFit: "Heidenreich is a service-academy back with limited NFL upside. At pick 6.230 he is undraftable for fantasy.",
  verdict: "Service-academy back with limited NFL translation. Not fantasy-relevant."
});

add('mcgowan', {
  shortReport: "A former Oklahoma signee who took the JUCO route to Kentucky and produced 189-1025-11TD in 2025 with a 5.4 YPC and 14 catches for 98 yards and 1 TD. McGowan is a volume grinder whose 1,025 yards and 11 TDs on 189 carries (5.4 YPC) show solid efficiency and goal-line finishing. The 14 catches gives him a tiny PPR floor, but he is primarily a between-the-tackles runner.\n\nThe JUCO-to-P5 transition is a positive signal — he proved he could produce at the SEC level after developing in junior college. The 11 TDs on 189 carries (5.8% rate) is solid goal-line production, and the 1,025 yards shows he can handle a feature workload. But the one-year sample is a concern — did he get a starting role because of talent or because of roster turnover ahead of him?",
  strengths: ["The 1,025 yards and 11 TDs on 189 carries shows solid efficiency and goal-line finishing.", "The JUCO-to-SEC transition proves his skills translate to P5 competition."],
  weaknesses: ["The one-year sample (189 carries) is too small to project with confidence.", "The 14 catches for 98 yards gives him minimal PPR floor.", "The Kentucky offense is balanced, which may have inflated his rushing volume."],
  nflFit: "Early-down committee back with goal-line value. Best in a power-run scheme.",
  comp: "Chris Evans — a JUCO-to-P5 back with modest volume and TD-dependent value.",
  dynastyOutlook: "RB4/5 with TD-dependent value. The one-year sample introduces risk.",
  badgersFit: "McGowan is a one-year producer with 11 TDs but a small sample. At pick 6.237 he is a bench stash with TD upside.",
  verdict: "Volume grinder with goal-line value. TD-dependent RB4/5."
});

add('miller-jam', {
  shortReport: "An Alabama committee back who took over the lead role in 2025 and produced 164-882-9TD with a 5.4 YPC and 11 catches for 72 yards. Miller's 9 TDs on 164 carries (5.5% rate) is solid goal-line production, and the 882 yards shows he can handle a moderate workload in the SEC. The 11 catches gives him a minimal PPR floor.\n\nThe Alabama context matters — the Crimson Tide typically split carries among multiple talented backs, which means Miller's 164 carries came in a committee even as the 'lead' back. That snap-share pattern will likely continue in the NFL, capping his volume at 150-180 carries per season. The 5.4 YPC is solid but not elite, and the lack of explosive plays limits his weekly ceiling.",
  strengths: ["The 9 rushing TDs on 164 carries shows solid goal-line finishing.", "The 5.4 YPC is solid SEC production.", "The Alabama pedigree suggests he has been coached at an elite level."],
  weaknesses: ["The 164 carries in a committee suggests his NFL volume will be capped.", "The 11 catches for 72 yards gives him minimal PPR floor.", "The 882 yards on 164 carries is modest efficiency that does not suggest big-play ability."],
  nflFit: "Committee back with goal-line value. Best in a rotation that maximizes his short-yardage ability.",
  comp: "Jalen Milroe's backfield mate — a committee back with TD-dependent value.",
  dynastyOutlook: "RB4/5 with TD-dependent value. The committee role caps his ceiling.",
  badgersFit: "Miller is an Alabama committee back with 9 TDs but capped volume. At pick 6.245 he is a bench stash.",
  verdict: "Committee back with goal-line value. TD-dependent RB4/5."
});

add('burks', {
  shortReport: "A Purdue transfer who caught 38 balls for 512 yards and 4 TDs at Oklahoma in 2025 with a 13.5 YPR. Burks is a slot-only receiver whose modest production (38 catches) and below-average YPR (13.5) do not project to fantasy relevance. The 4 TDs on 38 catches (10.5% rate) is solid red-zone finishing, but the overall profile is that of a depth receiver who struggles to create separation against P5 corners.\n\nThe Purdue-to-Oklahoma transfer arc is concerning — he moved from a pass-heavy Big Ten offense to an even more pass-heavy Big 12 offense and still only managed 38 catches. That suggests his skill set is limited to a specific role that does not generate significant volume. His ceiling is as a WR6 in a spread system.",
  strengths: ["The 4 TDs on 38 catches shows solid red-zone finishing.", "The Oklahoma spread offense prepared him for NFL route concepts."],
  weaknesses: ["The 38 catches is modest volume that suggests a limited role.", "The 13.5 YPR is below average and shows no deep-ball ability.", "The Purdue-to-Oklahoma transfer without increased production is a red flag."],
  nflFit: "Slot/depth receiver in a spread offense. Best as a complementary piece.",
  comp: "Dontay Demus — a slot receiver with limited volume and upside.",
  dynastyOutlook: "WR7 with minimal upside. The modest production does not project to fantasy value.",
  badgersFit: "Burks is a slot receiver with 38 catches and limited upside. At pick 6.254 he is undraftable for fantasy.",
  verdict: "Slot receiver with limited upside. Not fantasy-relevant."
});

// ========== BECK (Tier 3, 3 paragraphs) ==========
add('beck', {
  shortReport: "A pure-pocket quarterback whose 30-12 TD-to-INT ratio and 72.4% completion in 2025 at Miami is elite accuracy, but whose -18 rush yards and 1 career rushing TD give him zero fantasy floor. Beck is the archetype of the modern game-manager QB — efficient, careful with the ball, productive in a clean pocket, and completely immobile. In superflex leagues, the 30 passing TDs give him streaming value as a bye-week fill-in. In single-QB, the lack of rushing makes him unstartable.\n\nThe Miami transition in 2025 is instructive. Beck moved from Georgia's conservative pro-style offense to Miami's spread attack, and his completion percentage jumped from 64.2% to 72.4% while his INTs stayed flat at 12. That suggests the accuracy improvement was system-driven — more designed short passes, more RPOs, more easy completions — rather than genuine progression as a passer. The TDs increased from 28 to 30, but the yardage only climbed from 3,485 to 3,813, which means the efficiency gains came on volume rather than explosive plays. That is the profile of a dink-and-dunk quarterback who needs a system to create open receivers rather than one who creates separation with his arm.\n\nThe 12 INTs in both 2024 and 2025 are the hidden concern. Even with elite completion percentages, Beck throws interceptions at a rate that suggests he forces balls into tight windows when the primary read is not open. That is a negative habit that NFL defenses will exploit — the windows are tighter in the NFL, and quarterbacks who cannot improvise or create off-schedule become turnover machines. The immobility compounds this problem because he cannot extend plays to find secondary options.",
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
  nflFit: "Backup QB in a West Coast or spread system. The accuracy is his calling card but the immobility and INT rate cap his ceiling. Not a fantasy asset in any format.\n\nThe accuracy is translatable to any timing-based passing game. Beck can operate efficiently in a system that creates open receivers with scheme rather than asking him to create with his arm.\n\nThe immobility is the dealbreaker for fantasy. Quarterbacks who do not run have no floor in bad passing weeks, and Beck's negative rush yards mean he will give you QB3 lines when the passing game struggles.",
  comp: "Mac Jones — accurate pocket passer with limited mobility whose fantasy value is entirely dependent on system and supporting cast. Like Jones, Beck will have efficient seasons in the right offense and look unplayable in the wrong one.\n\nThe Jones comparison is about the system-dependent pocket passer profile. Jones was productive in New England's spread system but regressed when the supporting cast deteriorated. Beck has a similar profile with better accuracy but worse mobility.",
  dynastyOutlook: "QB4/5 in superflex. Unrosterable in single-QB.\n\nThe passing TDs (30 in 2025) give him streaming value in superflex as a bye-week fill-in, but the immobility and system-dependence make him a risky weekly starter.\n\nThe INT rate (12 in consecutive seasons) is the long-term concern. If NFL defenses force him to throw into tighter windows, the turnovers will increase and his efficiency will decline.",
  badgersFit: "Beck is a system QB with zero rushing floor. The 72.4% completion and 30 TDs look good until you see -18 rush yards and 12 INTs. In superflex he is a streaming option at best. In single-QB he is unrosterable. At pick 3.65 he is fine as a QB3 stash but do not expect weekly starts.\n\nThe Badgers-specific concern is the system-dependence. Beck thrived in Miami's spread but struggled in Georgia's pro-style. If his NFL landing spot does not feature designed short passes and RPOs, his production will crater.\n\nThe 12 INTs are the dealbreaker. Even with elite completion percentages, the turnover rate suggests he forces throws rather than checking down. That habit gets worse in the NFL.",
  verdict: "Accurate pocket passer with zero rushing floor. Streaming superflex option only."
});

// ========== ALLAR (Tier 4, 3 paragraphs) ==========
add('allar', {
  shortReport: "A classic pocket passer whose 3,327 yards and 24 TDs in 2024 showed legitimate arm talent, but whose 2025 season ended in November with a broken ankle that required season-ending surgery. Allar's career totals at Penn State (7,402 yards, 61 TDs) are solid but not spectacular for a four-year starter at a program with elite offensive talent. His 63.4% completion in 2024 is modest for a modern quarterback, and his 8 INTs suggest the decision-making needs refinement.\n\nThe broken ankle in November 2025 is the defining concern for his dynasty value. Ankle injuries for quarterbacks affect plant-foot mechanics, pocket mobility, and the ability to evade rushers — all critical skills for a pocket passer whose value is rooted in timing and accuracy. The recovery timeline is uncertain, and even a full recovery typically costs a quarterback 6-12 months of development time. That means Allar likely will not be ready for the 2025 NFL season, which pushes his fantasy relevance to 2026 at the earliest and makes him a taxi-squad stash rather than a rosterable asset.\n\nThe rushing production (52 carries for 82 yards and 3 TDs in 2024) is minimal and confirms he is a pure pocket passer. In superflex, that lack of a rushing floor makes him dependent entirely on passing production, which is capped by his modest accuracy and the ankle recovery. In single-QB, he is completely unrosterable. The dynasty play on Allar is betting that the 2024 numbers (24 TDs, 3,327 yards) represent his true level and that the ankle recovers fully, but that is a bet with significant downside.",
  strengths: [
    "The 24 passing TDs in 2024 show legitimate arm talent and the ability to produce in a structured offense.",
    "The Penn State pedigree and four-year starting experience mean he has been coached in a pro-style system that prepares him for NFL concepts.",
    "The 3 rushing TDs in 2024 show he is functional near the goal line, which adds a small fantasy ceiling."
  ],
  weaknesses: [
    "The broken ankle (Nov 2025, season-ending surgery) is a major injury concern that will cost him development time and may permanently affect his plant-foot mechanics.",
    "The modest completion percentage (63.4% in 2024) suggests accuracy limitations that will be exposed against NFL defenses with tighter coverage windows.",
    "The minimal rushing (82 yards in 2024) gives him almost no fantasy floor. In bad passing weeks, he will give you QB3 lines."
  ],
  nflFit: "Backup QB in a timing-based system. Best in a West Coast offense that maximizes his intermediate accuracy and tolerates his limited mobility.\n\nThe arm talent is legitimate — 24 TDs and 3,327 yards in 2024 show he can drive the ball on outs and seams. But the modest completion percentage (63.4%) and the ankle recovery mean he needs a system that creates open receivers rather than one that asks him to create off-schedule.\n\nThe broken ankle is the timeline concern. Even with full recovery, the lost development time pushes his NFL readiness to 2026, which makes him a taxi-squad-only asset in dynasty.",
  comp: "Andy Dalton — a pocket passer with solid arm talent and limited mobility whose fantasy value is entirely dependent on the system around him. Like Dalton, Allar can manage a game but cannot elevate a bad offense.\n\nThe Dalton comparison is about the system-dependent pocket passer profile. Dalton had productive seasons in Cincinnati because of the supporting cast but struggled when the talent around him declined. Allar has a similar profile with the added concern of a significant injury.",
  dynastyOutlook: "QB5/6 in superflex. Taxi squad stash only. The broken ankle pushes his NFL timeline to 2026.\n\nThe Penn State pedigree and 24-TD 2024 season give him a path to relevance if the ankle recovers fully, but the modest accuracy and zero rushing floor cap his ceiling at QB3 in superflex.\n\nThe injury risk is the deciding factor. Even a full recovery typically costs 6-12 months of development time for a quarterback, which means he is unlikely to see meaningful NFL snaps before 2026.",
  badgersFit: "Allar is a high-risk stash whose 24-TD 2024 season shows arm talent but whose broken ankle makes him a 2026 proposition at best. At pick 4.76 he is a taxi squad dart throw — if the ankle heals and he lands in a timing-based system, he could be a streaming QB3. If not, you have lost a fourth-round pick on a player who may never play.\n\nThe Badgers-specific concern is the timeline. Dynasty managers need players who contribute within 1-2 years. Allar's broken ankle means he may not contribute until 2026 or 2027, which is a long wait for minimal upside.\n\nThe zero rushing floor makes him unrosterable in single-QB and a risky taxi stash in superflex. Only draft if you have deep taxi squad space and patience.",
  verdict: "Pocket passer with broken ankle. Taxi squad stash with QB3 upside if he recovers."
});

// ========== EXPAND TIER 2 shortReports (price, concepcion, sadiq, simpson, cooper) ==========

// PRICE
if (d.price && d.price.shortReport) {
  d.price.shortReport = "The most fascinating medical-risk prospect in this class. Price tore his Achilles in October 2023 and returned by August 2024 — a timeline that borders on miraculous for a running back whose game is built on explosive burst. The 2025 tape confirms the burst is back: he hits the hole with the same urgency and suddenness he showed before the injury, and his 11 touchdowns on just 113 carries prove he has not lost his nose for the end zone. But the Achilles cloud hangs over everything — the re-injury risk, the long-term durability questions, and the fact that he has never proven he can handle a full workload even when healthy. He is a high-upside RB2 if the medicals check out, but the floor is a player who cannot stay on the field.\n\nThe 2024 season is the most important contextual frame for evaluating Price's ceiling. In 2024 — his first season back from the Achilles — he carried the ball 108 times for 746 yards and 7 touchdowns, a 6.9 YPC that proves the burst translated to game speed immediately. That is not a player who was tentative or compensating; that is a player who returned from one of the most devastating injuries in sports and produced at an elite efficiency rate from Day 1. The 7 touchdowns on 108 carries (6.5% rate) is the same scoring efficiency he showed in 2025 (11 TDs on 113 carries = 9.7% rate), which suggests the goal-line finishing was never compromised by the injury.\n\nThe workload concern is the hidden constraint that most evaluators overlook. Price has never carried the ball more than 163 times in a season — not because of the Achilles, but because Notre Dame's backfield was crowded with Audric Estime in 2023 and multi-back rotations in 2024-25. That means we do not actually know if his body can handle 250+ carries over a 17-game NFL season. The 113 carries in 2025 came in a season where he was the clear RB1, which means the coaching staff was managing his workload rather than feeding him. That is smart coaching at the college level but it introduces uncertainty at the NFL level, where teams want to know if a back can handle a workhorse role.\n\nThe receiving trajectory is the most encouraging non-burst development in his profile. In 2024 he caught 14 passes for 112 yards and 0 touchdowns — a minimal passing-game role. In 2025 he jumped to 22 catches for 187 yards and 2 touchdowns, which is a 57% increase in catches and the first receiving touchdowns of his career. That growth suggests he is not just a runner who is learning to catch — he is a back who is developing into a legitimate third-down option. If that trajectory continues, Price could be a 200-carry, 30-catch back with 12+ touchdowns, which is an RB1 profile in most fantasy formats.";
}

// CONCEPCION
if (d.concepcion && d.concepcion.shortReport) {
  d.concepcion.shortReport = "A gadget slot receiver whose fantasy value is rooted in what he can do with the ball in his hands rather than how he gets it. Concepcion's 2023 season at NC State — 71 catches, 839 yards, 10 touchdowns — was one of the most productive slot seasons in college football that year, and it was built entirely on after-the-catch creativity and schemed touches. The transfer to Texas A&M revealed a more modest version of the same player: 55-661-8 in 2025 is solid but not the same explosive weapon. The punt-return touchdown in 2023 adds a dimension of value that most slot receivers lack, but his small frame and boundary limitations cap his ceiling at WR4/5 in most dynasty formats.\n\nThe NC State-to-Texas A&M production decline is the central evaluative question for Concepcion's dynasty value. At NC State in 2023, he was the focal point of an offense that schemed him open on screens, slants, and designed touches — 71 catches with a 12.0 YPR that reflects high-volume, low-depth usage. At Texas A&M in 2025, he was one of multiple options in a more balanced attack, and his production dipped accordingly. The optimistic interpretation is that he developed as a more complete receiver who won on intermediate routes rather than just schemed touches. The pessimistic interpretation is that he could not earn targets at the same rate against SEC competition and that his NC State production was system-driven rather than skill-driven.\n\nThe all-purpose value is what separates Concepcion from other slot receivers in this class. The punt-return touchdown in 2023 and the kick-return usage in 2024 give him a hidden floor booster that standard scoring formats do not capture but return-yard leagues reward heavily. In 2023 he returned 12 punts for 148 yards and a touchdown — production that adds 2-3 fantasy points per week in return-yard formats. That dimension of value means Concepcion has a path to fantasy relevance even if his receiving volume does not increase at the NFL level, which is a unique profile among the slot receivers in this tier.\n\nThe physical limitations are the ceiling cap that every evaluator acknowledges but few fully appreciate. At around 5'10\" 185, Concepcion struggles against press coverage at the line of scrimmage — he does not have the frame to fight through jams or the physicality to win at the catch point against NFL corners. That means he will be limited to the slot, which limits his snap count to 60-70% of offensive snaps in most NFL offenses. He also does not have the deep speed to stress defenses vertically — his game is contained within 15 yards of the line of scrimmage, which means his per-catch value is capped and his touchdown ceiling is dependent on schemed red-zone touches rather than natural red-zone ability.";
}

// SADIQ
if (d.sadiq && d.sadiq.shortReport) {
  d.sadiq.shortReport = "The prize of a weak tight end class. Sadiq is a 6'6\" 241-pound former basketball player whose athletic profile is rare for the position — he moves with the fluidity of a player 30 pounds lighter, wins above the rim in the red zone with a 34.1-inch vertical, and shows the kind of ascending production (5->24->51 catches, 1->2->8 TDs) that suggests he is just beginning to unlock his potential. He is raw as a blocker and his route-running is still developing, but the athletic foundation is so strong that he projects as a move TE who can create mismatches in the slot from Day 1. In a dynasty landscape where tight end is the scarcest position, Sadiq's combination of size, athleticism, and trajectory makes him the most valuable TE in this class.\n\nThe production trajectory is the most compelling reason to draft Sadiq ahead of every other tight end in this class. Five catches and one touchdown as a freshman in 2023 — essentially a redshirt season where he played sparingly and showed flashes. Twenty-four catches and two touchdowns as a sophomore in 2024 — a developmental season where he started earning consistent snaps and demonstrated that his basketball skills translated to football. Fifty-one catches and eight touchdowns as a junior in 2025 — a breakout season where he became the focal point of Oregon's passing game and proved he could handle a TE1 workload. That 5->24->51 progression is not linear growth; it is exponential growth, and exponential growth is the strongest signal of a player who has not reached his ceiling.\n\nThe basketball-to-tight-end conversion arc is well-established in NFL history — Antonio Gates, Jimmy Graham, Mo Alie-Cox, and others have proven that basketball body control, spatial awareness, and contested-catch ability translate directly to tight end production. Sadiq's 34.1-inch vertical at 6'6\" 241 pounds means he can catch the ball at a point that safeties and linebackers simply cannot reach, which makes him a red-zone weapon from Day 1 regardless of his route-running polish. The contested-catch ability — adjusting to balls thrown behind him, above him, or away from his frame — is rooted in basketball instincts that football-trained tight ends cannot replicate. That skill is what produced 8 touchdowns on 51 catches in 2025, and it is what will produce touchdowns at the NFL level even as he develops the rest of his game.\n\nThe rawness is the risk that keeps Sadiq out of Tier 1. His route-running is still developing — he runs a limited tree of seams, crosses, and screens rather than the full NFL route tree. His blocking is nonexistent — he does not have the technique or leverage to hold up as an inline blocker, which means he will be a move TE or F-back in the NFL rather than a traditional three-down tight end. That limitation caps his snap count and therefore his target volume, which limits his fantasy ceiling relative to a player like Sam LaPorta or Trey McBride who can play every down. But in dynasty, the tight end position is so scarce that a move TE with Sadiq's athletic profile and trajectory is more valuable than a complete tight end with modest athletic ability.";
}

// SIMPSON
if (d.simpson && d.simpson.shortReport) {
  d.simpson.shortReport = "The most accurate quarterback in this class, and it is not particularly close. Simpson's 71.4% completion rate and 28-5 TD-INT ratio in his first starting season at Alabama are the kind of numbers that make NFL scouts take notice — not because the raw numbers are impressive, but because the tape confirms they are real. He puts the ball in stride consistently, processes the field quickly, and gets the ball out before the rush arrives. The five rushing touchdowns are the fantasy hook that elevates him from 'accurate pocket passer' to 'viable fantasy QB1 with a floor.' The risk is that it is one year of tape surrounded by NFL-caliber weapons at Alabama — we are betting on the development, not confirming it.\n\nThe one-year sample is the defining risk factor that keeps Simpson in Tier 2 rather than Tier 1. Every other quarterback in this class has at least two seasons of starting tape — Mendoza has three full seasons at Cal and Indiana, Nussmeier has multiple years at LSU, and even Klubnik has two seasons at Clemson. Simpson has exactly one season as a starter at Alabama, and that season came behind one of the best offensive lines in college football, throwing to multiple NFL-caliber receivers, and operating in an offense that simplified his reads with RPOs and schemed openings. The 71.4% completion is elite, but how much of that is Simpson's accuracy and how much is the system creating wide-open receivers?\n\nThe rushing touchdowns are the fantasy differentiator that makes Simpson a viable QB2 in superflex formats. Five rushing touchdowns on 62 carries in 2025 is a touchdown rate of 8.1% — higher than most NFL quarterbacks who are considered 'dual-threat.' But the 287 rushing yards on 62 carries (4.6 YPC) is modest volume that suggests the rushing production was concentrated in goal-line and short-yardage situations rather than consistent scramble yards. That distinction matters for fantasy because it means his rushing floor is touchdown-dependent rather than yardage-dependent — in weeks where he does not score with his legs, the rushing contribution is minimal.\n\nThe Alabama context is a double-edged sword. On one hand, throwing to elite receivers against SEC defenses is better preparation for the NFL than throwing to mid-major receivers against Conference USA defenses. Simpson has seen tight coverage windows, fast linebackers in coverage, and complex defensive schemes — all of which will translate to the NFL. On the other hand, the Alabama offensive line gave him clean pockets on most dropbacks, which means we have not seen him operate under consistent pressure with a collapsing pocket. NFL quarterbacks who thrive in clean college pockets often struggle when they are asked to create off-schedule against NFL pass rushes. Simpson's ability to perform when the protection breaks down is the biggest unknown in his profile.";
}

// COOPER
if (d.cooper && d.cooper.shortReport) {
  d.cooper.shortReport = "One of the most encouraging developmental arcs in this class. Cooper went from a supporting role (18 catches in 2023) to the top receiver on a national championship team (69 catches, 13 TDs in 2025) through genuine improvement in his route-running, his release package, and his understanding of leverage against defensive coverage. The production ascent is steep enough to be a strong signal — every metric improved every year — but the one-elite-year concern and the Indiana spread-system context introduce enough uncertainty to keep him out of the top tier. He is a WR3 with WR2 upside if the development continues at the NFL level.\n\nThe Indiana spread-system context is the primary concern for projecting Cooper's NFL translation. Indiana's offense in 2025 was one of the most receiver-friendly systems in college football — designed RPOs, simplified reads, and a quarterback (Mendoza) who posted a 72.0% completion rate. Cooper's 69 catches and 13 touchdowns came in an offense that created open receivers with scheme rather than asking them to win one-on-one against tight coverage. The 13.6 YPR in 2025 — down from 21.2 in 2024 — reflects that shift: he was catching more balls on shorter routes rather than winning downfield on vertical concepts. That does not mean his skills are not real; it means we need to separate scheme-driven production from skill-driven production when evaluating his ceiling.\n\nThe year-over-year improvement is the strongest signal that Cooper's development is genuine rather than opportunity-driven. In 2023 he caught 18 balls for 267 yards and 2 touchdowns — a depth piece who contributed on occasion. In 2024 he jumped to 28 catches for 594 yards and 7 touchdowns — a big-play specialist who produced 21.2 YPR on limited volume. In 2025 he exploded to 69 catches for 937 yards and 13 touchdowns — the focal point of a national championship passing game. That trajectory is not just 'more targets' — it is 'more skills earning more targets.' The route-running polish that showed up in 2025 tape was not there in 2023, which means he developed as a receiver rather than just getting more opportunities.\n\nThe physical profile is efficient but not explosive, which defines his ceiling. Cooper does not have the sudden burst that creates instant separation at the stem — his breaks are deliberate rather than violent, and he wins by building speed through the route rather than snapping open at the break point. That profile works well on vertical routes and deep comebacks where he can use his long speed and tracking ability, but it limits him on short-area routes where suddenness is the separator. His after-the-catch ability is rooted in size and lean rather than elusiveness — he breaks arm tackles with his frame and keeps his legs driving through contact, but he does not make defenders miss in space. That means his ceiling is as a productive WR2 who wins on intermediate and vertical routes rather than a true WR1 who dominates all levels of the field.";
}

fs.writeFileSync('public/scouting-reports.json', JSON.stringify(d, null, 2));
console.log('Done. Total keys: ' + Object.keys(d).length);
console.log('Tier 2 shortReports expanded: ' + ['price','concepcion','sadiq','simpson','cooper'].map(id=>id+':'+(d[id]?.shortReport?.split('\\n\\n').length||0)+'paras').join(', '));
