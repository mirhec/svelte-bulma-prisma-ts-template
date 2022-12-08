<script lang="ts">
	import '../app.scss';
</script>


<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="https://bulma.io">
			<img
				src="https://strongs.de/static/images/logo.png"
			/>
		</a>

		<a
			role="button"
			class="navbar-burger"
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarBasicExample"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>

	<div class="navbar-menu">
		<div class="navbar-start navbar-start--centered">
			<div class="navbar-item">
				<button class="button">
					<span class="icon"><i class="fas fa-angle-left"></i></span>
				</button>
			</div>
			<div class="navbar-item">
                <div class="field has-addons">
                        <div class="field">
                            <div class="control">
                                <input type="text" class="input" placeholder="Suchen" />
                            </div>
                        </div>
                    <p class="control">
                        <button class="button is-primary"> Suchen </button>
                    </p>
                </div>
			</div>
			<div class="navbar-item">
				<button class="button">
					<span class="icon"><i class="fas fa-angle-right"></i></span>
				</button>
			</div>
		</div>

		<div class="navbar-end">
		</div>
	</div>
</nav>

<section class="section">
        <slot></slot>
</section>

<style lang="css">
	.navbar-start--centered {
		flex-grow: 1;
		justify-content: center;
	}
</style>