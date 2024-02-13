import { NgModule } from '@angular/core';
import {
	getApp,
	initializeApp,
	provideFirebaseApp,
} from '@angular/fire/app';
import {
	provideFirestore,
	initializeFirestore,
} from '@angular/fire/firestore'

const firebaseConfig = {
  // ...
}

@NgModule({
	imports: [
		provideFirebaseApp(() => initializeApp(firebaseConfig)),
		provideFirestore(() => {
			const firestore = initializeFirestore(getApp(), {
				ignoreUndefinedProperties: true,
			});
			return firestore;
		}),
	],
})
export class FirebaseModule {}
