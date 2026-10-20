import { ScrollView, StyleSheet, Text, View } from 'react-native';

const colors = {
  blue: '#1769C2',
  deepBlue: '#123D70',
  ink: '#17334F',
  muted: '#75879A',
  paleBlue: '#EAF3FD',
  line: '#E6EDF5',
  white: '#FFFFFF',
};

export function HomeScreen() {
  return (
    <Page>
      <Text style={styles.eyebrow}>MONDAY, JUNE 16</Text>
      <Text style={styles.heading}>Good morning, Nathan</Text>
      <Text style={styles.subtitle}>Your next great escape is getting closer.</Text>

      <View style={styles.tripCard}>
        <View style={styles.tripTopRow}>
          <Text style={styles.tripEyebrow}>UP NEXT  ·  12 DAYS</Text>
          <View style={styles.statusPill}><Text style={styles.statusText}>CONFIRMED</Text></View>
        </View>
        <View style={styles.routeRow}>
          <View>
            <Text style={styles.airportCode}>SFO</Text>
            <Text style={styles.city}>San Francisco</Text>
          </View>
          <View style={styles.routeMiddle}>
            <View style={styles.routeLine} />
            <Text style={styles.flightLabel}>5h 38m</Text>
          </View>
          <View style={styles.destination}>
            <Text style={styles.airportCode}>JFK</Text>
            <Text style={styles.city}>New York</Text>
          </View>
        </View>
        <View style={styles.cardDivider} />
        <View style={styles.tripBottomRow}>
          <Text style={styles.tripDetail}>FRI, JUN 28  ·  9:40 AM</Text>
          <Text style={styles.tripDetail}>FLIGHT UA 218</Text>
        </View>
      </View>

      <SectionHeading title="Your itinerary" action="See all" />
      <View style={styles.itineraryRow}>
        <View style={[styles.dayMarker, styles.dayMarkerActive]}><Text style={styles.dayNumber}>28</Text><Text style={styles.dayMonth}>JUN</Text></View>
        <View style={styles.itineraryContent}>
          <Text style={styles.itineraryTitle}>Land in New York</Text>
          <Text style={styles.itineraryMeta}>9:40 AM  ·  John F. Kennedy Airport</Text>
        </View>
        <Text style={styles.rowArrow}>›</Text>
      </View>
      <View style={styles.itineraryRow}>
        <View style={styles.dayMarker}><Text style={styles.dayNumber}>28</Text><Text style={styles.dayMonth}>JUN</Text></View>
        <View style={styles.itineraryContent}>
          <Text style={styles.itineraryTitle}>Check in at The Ludlow</Text>
          <Text style={styles.itineraryMeta}>3:00 PM  ·  Lower East Side</Text>
        </View>
        <Text style={styles.rowArrow}>›</Text>
      </View>

      <SectionHeading title="Trip checklist" action="2 of 5" />
      <View style={styles.checklist}>
        <View style={styles.checkCircle}><Text style={styles.checkMark}>✓</Text></View>
        <Text style={styles.checkedItem}>Book your stay</Text>
        <Text style={styles.completed}>DONE</Text>
      </View>
      <View style={styles.checklist}>
        <View style={styles.checkCircle}><Text style={styles.checkMark}>✓</Text></View>
        <Text style={styles.checkedItem}>Save your flight details</Text>
        <Text style={styles.completed}>DONE</Text>
      </View>
      <View style={styles.checklist}>
        <View style={styles.emptyCheck} />
        <Text style={styles.pendingItem}>Pick a few places to eat</Text>
      </View>
    </Page>
  );
}

export function DiscoverScreen() {
  return (
    <Page>
      <Text style={styles.eyebrow}>GO SOMEWHERE NEW</Text>
      <Text style={styles.heading}>Find your next stop</Text>
      <Text style={styles.subtitle}>A few places worth building a trip around.</Text>
      <View style={styles.featureCard}>
        <View style={[styles.featureArtwork, { backgroundColor: '#DBEAF9' }]}>
          <Text style={styles.featureSymbol}>SF</Text>
          <View style={styles.artworkBadge}><Text style={styles.artworkBadgeText}>CITY GUIDE</Text></View>
        </View>
        <View style={styles.featureCopy}>
          <Text style={styles.featureTitle}>San Francisco</Text>
          <Text style={styles.featureDescription}>Ocean air, neighborhood bakeries, and slow afternoons.</Text>
          <Text style={styles.featureMeta}>18 PLACES  ·  3 DAY GUIDE</Text>
        </View>
      </View>
      <SectionHeading title="Made for a long weekend" action="Explore" />
      <DestinationRow initials="SEA" name="Seattle" detail="Coffee stops & coastal views" tint="#E4F1EE" />
      <DestinationRow initials="CHI" name="Chicago" detail="Architecture & late-night jazz" tint="#F3ECE4" />
      <DestinationRow initials="MTL" name="Montreal" detail="Old streets & new discoveries" tint="#EAE8F3" />
    </Page>
  );
}

export function SavedScreen() {
  return (
    <Page>
      <Text style={styles.eyebrow}>YOUR COLLECTION</Text>
      <Text style={styles.heading}>Saved for later</Text>
      <Text style={styles.subtitle}>The places you want to come back to.</Text>
      <SectionHeading title="New York" action="6 places" />
      <DestinationRow initials="01" name="Russ & Daughters Cafe" detail="Lower East Side  ·  Breakfast" tint="#EAF3FD" />
      <DestinationRow initials="02" name="The High Line" detail="Chelsea  ·  Outdoors" tint="#E4F1EE" />
      <DestinationRow initials="03" name="The Morgan Library" detail="Murray Hill  ·  Culture" tint="#F3ECE4" />
      <SectionHeading title="Somewhere else" action="2 places" />
      <DestinationRow initials="04" name="Point Reyes" detail="California  ·  Outdoors" tint="#E4F1EE" />
      <DestinationRow initials="05" name="Bar Isabel" detail="Toronto  ·  Dinner" tint="#F3ECE4" />
    </Page>
  );
}

export function ProfileScreen() {
  return (
    <Page>
      <Text style={styles.eyebrow}>YOUR TRAVEL PROFILE</Text>
      <Text style={styles.heading}>Travel, your way.</Text>
      <Text style={styles.subtitle}>A little space for all the places you are going.</Text>
      <View style={styles.profileCard}>
        <View style={styles.avatar}><Text style={styles.avatarText}>N</Text></View>
        <View><Text style={styles.profileName}>Nathan Fielder</Text><Text style={styles.profileEmail}>nathan.fielder@example.com</Text></View>
      </View>
      <SectionHeading title="Your year in travel" action="2026" />
      <View style={styles.statsRow}>
        <Stat value="4" label="TRIPS PLANNED" />
        <Stat value="12" label="PLACES SAVED" />
        <Stat value="3" label="CITIES" />
      </View>
      <SectionHeading title="Preferences" />
      <View style={styles.preferenceRow}><Text style={styles.preferenceLabel}>Home airport</Text><Text style={styles.preferenceValue}>SFO  ›</Text></View>
      <View style={styles.preferenceRow}><Text style={styles.preferenceLabel}>Travel style</Text><Text style={styles.preferenceValue}>Slow & curious  ›</Text></View>
      <View style={styles.preferenceRow}><Text style={styles.preferenceLabel}>Notifications</Text><Text style={styles.preferenceValue}>On  ›</Text></View>
    </Page>
  );
}

function Page({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
      {children}
    </ScrollView>
  );
}

function SectionHeading({ title, action }: { title: string; action?: string }) {
  return (
    <View style={styles.sectionHeading}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.sectionAction}>{action}</Text> : null}
    </View>
  );
}

function DestinationRow({ initials, name, detail, tint }: { initials: string; name: string; detail: string; tint: string }) {
  return (
    <View style={styles.destinationRow}>
      <View style={[styles.destinationThumb, { backgroundColor: tint }]}><Text style={styles.destinationInitials}>{initials}</Text></View>
      <View style={styles.destinationCopy}><Text style={styles.itineraryTitle}>{name}</Text><Text style={styles.itineraryMeta}>{detail}</Text></View>
      <Text style={styles.rowArrow}>›</Text>
    </View>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <View style={styles.stat}><Text style={styles.statValue}>{value}</Text><Text style={styles.statLabel}>{label}</Text></View>;
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F3F7FC' },
  pageContent: { paddingHorizontal: 20, paddingTop: 26, paddingBottom: 36, maxWidth: 620, width: '100%', alignSelf: 'center' },
  eyebrow: { color: colors.blue, fontSize: 10, fontWeight: '800', letterSpacing: 1.25 },
  heading: { color: colors.ink, fontSize: 27, lineHeight: 34, fontWeight: '700', marginTop: 8 },
  subtitle: { color: colors.muted, fontSize: 14, lineHeight: 21, marginTop: 5, marginBottom: 22 },
  tripCard: { backgroundColor: colors.deepBlue, borderRadius: 12, padding: 18, marginBottom: 26 },
  tripTopRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  tripEyebrow: { color: '#BBD5F1', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  statusPill: { backgroundColor: '#28588A', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 },
  statusText: { color: '#E3F0FF', fontSize: 8, fontWeight: '800', letterSpacing: 0.6 },
  routeRow: { flexDirection: 'row', alignItems: 'center', marginTop: 23, marginBottom: 20 },
  airportCode: { color: colors.white, fontSize: 26, fontWeight: '700' },
  city: { color: '#C5D7EB', fontSize: 10, marginTop: 3 },
  destination: { alignItems: 'flex-end' },
  routeMiddle: { flex: 1, alignItems: 'center', marginHorizontal: 13 },
  routeLine: { width: '100%', height: 1, backgroundColor: '#779AC1' },
  flightLabel: { position: 'absolute', top: 8, color: '#C5D7EB', fontSize: 9 },
  cardDivider: { height: StyleSheet.hairlineWidth, backgroundColor: '#42658C' },
  tripBottomRow: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 13 },
  tripDetail: { color: '#D0E0F1', fontSize: 9, fontWeight: '700', letterSpacing: 0.4 },
  sectionHeading: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4, marginBottom: 10 },
  sectionTitle: { color: colors.ink, fontSize: 16, fontWeight: '700' },
  sectionAction: { color: colors.blue, fontSize: 11, fontWeight: '600' },
  itineraryRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 11, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.line },
  dayMarker: { width: 42, height: 46, borderRadius: 8, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.line },
  dayMarkerActive: { backgroundColor: colors.paleBlue, borderColor: '#D6E8FC' },
  dayNumber: { color: colors.ink, fontSize: 16, fontWeight: '700' },
  dayMonth: { color: colors.blue, fontSize: 8, fontWeight: '700', marginTop: 1 },
  itineraryContent: { flex: 1, marginLeft: 12 },
  itineraryTitle: { color: colors.ink, fontSize: 13, fontWeight: '600' },
  itineraryMeta: { color: colors.muted, fontSize: 10, marginTop: 4 },
  rowArrow: { color: '#9AA9B9', fontSize: 22, paddingLeft: 8 },
  checklist: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.line },
  checkCircle: { height: 19, width: 19, borderRadius: 10, backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center' },
  checkMark: { color: colors.white, fontSize: 11, fontWeight: '800' },
  emptyCheck: { height: 19, width: 19, borderRadius: 10, borderWidth: 1.5, borderColor: '#BAC8D7' },
  checkedItem: { flex: 1, color: colors.muted, fontSize: 12, textDecorationLine: 'line-through' },
  pendingItem: { flex: 1, color: colors.ink, fontSize: 12, fontWeight: '500' },
  completed: { color: '#6C9B7B', fontSize: 8, fontWeight: '800', letterSpacing: 0.6 },
  featureCard: { overflow: 'hidden', backgroundColor: colors.white, borderRadius: 10, marginBottom: 24, borderWidth: 1, borderColor: colors.line },
  featureArtwork: { height: 128, justifyContent: 'center', alignItems: 'center' },
  featureSymbol: { color: '#386995', fontSize: 54, fontWeight: '800', letterSpacing: 2 },
  artworkBadge: { position: 'absolute', left: 12, top: 12, backgroundColor: '#FFFFFF', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 5 },
  artworkBadgeText: { color: colors.blue, fontSize: 8, fontWeight: '800', letterSpacing: 0.7 },
  featureCopy: { padding: 14 },
  featureTitle: { color: colors.ink, fontSize: 17, fontWeight: '700' },
  featureDescription: { color: colors.muted, fontSize: 12, lineHeight: 18, marginTop: 5 },
  featureMeta: { color: colors.blue, fontSize: 9, fontWeight: '700', letterSpacing: 0.6, marginTop: 12 },
  destinationRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, padding: 10, marginBottom: 8, borderRadius: 9, borderWidth: 1, borderColor: colors.line },
  destinationThumb: { width: 45, height: 45, borderRadius: 7, alignItems: 'center', justifyContent: 'center' },
  destinationInitials: { color: colors.deepBlue, fontSize: 11, fontWeight: '800', letterSpacing: 0.6 },
  destinationCopy: { flex: 1, marginLeft: 12 },
  profileCard: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: colors.white, borderRadius: 10, borderWidth: 1, borderColor: colors.line, marginBottom: 24 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.paleBlue, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  avatarText: { color: colors.blue, fontSize: 19, fontWeight: '700' },
  profileName: { color: colors.ink, fontSize: 14, fontWeight: '700' },
  profileEmail: { color: colors.muted, fontSize: 11, marginTop: 4 },
  statsRow: { flexDirection: 'row', backgroundColor: colors.white, borderRadius: 10, borderWidth: 1, borderColor: colors.line, paddingVertical: 16, marginBottom: 24 },
  stat: { flex: 1, alignItems: 'center', borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: colors.line },
  statValue: { color: colors.deepBlue, fontSize: 22, fontWeight: '700' },
  statLabel: { color: colors.muted, fontSize: 8, fontWeight: '700', letterSpacing: 0.5, marginTop: 4 },
  preferenceRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: colors.line },
  preferenceLabel: { color: colors.ink, fontSize: 12, fontWeight: '500' },
  preferenceValue: { color: colors.muted, fontSize: 11 },
});