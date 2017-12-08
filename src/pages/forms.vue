<template>
  <div>
    		<headermain>
				  <span slot="headerTitle">Vue Tutorials- Forms</span>
		    </headermain>

		<v-container grid-list-md >


			<form>


			<v-layout row wrap>
				<v-flex xs12>
					<h1>Vue Forms</h1>
					<hr>
					<div class="form-group">
							<label for="email">Mail</label>
							<input
											type="text"
											id="email"
											class="form-control"
											:value="userData.email"
											@input="userData.email = $event.target.value">
					</div>
					<div class="form-group">
							<label for="password">Password</label>
							<input
											type="password"
											id="password"
											class="form-control"
											v-model.lazy="userData.password">
							<p>{{ userData.password }}</p>
					</div>
					<div class="form-group">
							<label for="age">Age</label>
							<input
											type="number"
											id="age"
											class="form-control"
											v-model="userData.age">
					</div>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs12>
					 <label for="message">Message</label><br>
							<!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
							<textarea
									id="message"
									rows="5"
									class="form-control"
									v-model="message">
							</textarea>
				</v-flex>
			</v-layout>



			<v-layout row wrap>
				<v-flex xs12>
						<div class="form-group">
								<label for="sendmail">
										<input
														type="checkbox"
														id="sendmail"
														value="SendMail"
														v-model="sendMail"> Send Mail
								</label>
								<label for="sendInfomail">
										<input
														type="checkbox"
														id="sendInfomail"
														value="SendInfoMail"
														v-model="sendMail"> Send Infomail
								</label><!-- Also show for single checkbox with true/ false -->
						</div>
				</v-flex>
			</v-layout>



			<v-layout row wrap>
				<v-flex xs12>
					<label for="male">
							<input
											type="radio"
											id="male"
											value="Male"
											v-model="gender"> Male
					</label>
					<label for="female">
							<input
											type="radio"
											id="female"
											value="Female"
											v-model="gender"> Female
					</label>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs12>
					<label for="priority">Priority</label>
					<select
									id="priority"
									class="form-control"
									v-model="selectedPriority">
							<option
											v-for="priority in priorities"
											>{{ priority }}</option>
					</select>
				</v-flex>
			</v-layout>


			<v-layout row wrap>
				<v-flex xs12>
						<app-switch v-model="dataSwitch"></app-switch>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs12>
					<v-btn color="blue white--text" 	@click.prevent="submitted">Send</v-btn>

				</v-flex>
			</v-layout>


			</form>
			<hr>
			<v-layout row wrap v-if="isSubmitted">
				<v-flex xs12>
					<div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender:  {{ gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
				</v-flex>
			</v-layout>

			<v-layout row wrap>
				<v-flex xs5  >
					<div>
						<a href="https://github.com/dirkteucher/vue-tutorial-site/blob/master/src/pages/forms.vue" target="_blank">
							<v-btn color="green white--text">GET THIS CODE- forms.vue</v-btn>
						</a>

					</div>
				</v-flex>
			</v-layout>

		</v-container>
  </div>
</template>

<script>
   import Switch from '../components/switch.vue';

    export default {
        data () {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 27
                },
                message: 'A new Text',
                sendMail: [],
                gender: 'Male',
                selectedPriority: 'High',
                priorities: ['High', 'Medium', 'Low'],
                dataSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
          submitted() {
              this.isSubmitted = true;
          }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>

input[type="text"],
input[type="password"],
input[type="number"]
 {
    box-shadow: 0 0 2px black inset;
    margin: 6px;
    height: 30px;
    border-radius: 10px;
		padding-left:10px;
		outline: none;
}
textarea {
    box-shadow: 0 0 2px black inset;
    margin: 6px;
    border-radius: 10px;
		padding-left:10px;
		outline: none;
}

form label {
    width: 200px;
    display: inline-block;
}

select#priority {
    border: 1px solid black;
    padding: 4px;
    box-shadow: 0 0 1px black;
    outline: none;
}

hr {
	margin: 30px 0;
}

</style>